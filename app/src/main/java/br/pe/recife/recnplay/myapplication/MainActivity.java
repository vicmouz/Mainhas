package br.pe.recife.recnplay.myapplication;


import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class MainActivity extends AppCompatActivity {
FirebaseAuth mAuth = FirebaseAuth.getInstance();
    FirebaseAuthListener authListener = new FirebaseAuthListener(this);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.mAuth = FirebaseAuth.getInstance();
        this.authListener  = new FirebaseAuthListener(this);
    }

    public void buttonSignInClick(View view) {
        EditText edEmail = (EditText) findViewById(R.id.edit_email);
        EditText edPassword = (EditText) findViewById(R.id.edit_password);
        String login = edEmail.getText().toString();
        String passwd = edPassword.getText().toString();
        FirebaseAuth mAuth = FirebaseAuth.getInstance();
        mAuth.signInWithEmailAndPassword(login, passwd)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        Intent intent = new Intent(MainActivity.this, HomeActivity.class);
                        startActivity(intent);
                    }
                });
    }



    public void redirectSignup(View view) {
        Intent i = new Intent(MainActivity.this, SignupActivity.class);
        startActivity(i);

    }

    @Override
    public void onStart() {
        super.onStart();
        mAuth.addAuthStateListener(authListener);
    }

    @Override
    public void onStop() {
        super.onStop();
        mAuth.removeAuthStateListener(authListener);
    }
}