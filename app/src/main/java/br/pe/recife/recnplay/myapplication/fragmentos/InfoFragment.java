package br.pe.recife.recnplay.myapplication.fragmentos;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import br.pe.recife.recnplay.myapplication.R;
import br.pe.recife.recnplay.myapplication.entidades.Info;

public class InfoFragment extends Fragment {

    private static final Info [] infos = {
            new Info(1, "Hoje menina, amanhã mulher"),
            new Info(2, "Centro de referência Clarice Lispector"),
            new Info(3, "Centro da Mulher Metropolitana Júlia Santiago"),
            new Info(4, "Maria da Penha vai à Escola"),
            new Info(5, "Açõespontuais"),
            new Info(6, "Campanhas")
    };

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_info, null);
    }
}
