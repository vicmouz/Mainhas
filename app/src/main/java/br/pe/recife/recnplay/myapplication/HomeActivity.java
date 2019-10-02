package br.pe.recife.recnplay.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.google.firebase.auth.FirebaseAuth;

import br.pe.recife.recnplay.myapplication.entidades.Info;

public class HomeActivity extends AppCompatActivity {
    FirebaseAuth mAuth = FirebaseAuth.getInstance();
    FirebaseAuthListener authListener = new FirebaseAuthListener(this);


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        this.mAuth = FirebaseAuth.getInstance();
        this.authListener = new FirebaseAuthListener(this);
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
