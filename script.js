# Lumine — GitHub Pages + Google Sheets

Este projeto pode ser publicado diretamente no GitHub Pages.

## O que é registrado ao abrir a página

- IP público;
- navegador e sistema;
- tipo, marca e modelo quando informados pelo navegador;
- idioma, fuso horário, tela, pixel ratio e orientação;
- memória aproximada e núcleos quando disponíveis;
- conexão estimada quando disponível;
- URL, referência e parâmetros de campanha;
- localização somente quando o visitante autorizar.

A localização não é obrigatória. Negar ou ignorar a solicitação não bloqueia o site.

## Atualizar o Google Apps Script

1. Abra a planilha e entre em **Extensões → Apps Script**.
2. Substitua o conteúdo pelo arquivo `google_apps_script/Code.gs` deste projeto.
3. Salve.
4. Vá em **Implantar → Gerenciar implantações**.
5. Edite a implantação atual e selecione **Nova versão**.
6. Confirme que o acesso está como **Qualquer pessoa** e implante novamente.

A URL já configurada no `script.js` é:

```text
https://script.google.com/macros/s/AKfycbyuXvoqRqF1H8JZt5hbTOqTL7awxGt87F0CdASQLh0BbfzbBzMaBZtBDs-Xq-eeBmKFVA/exec
```

## Publicar no GitHub Pages

1. Envie `index.html`, `styles.css`, `script.js` e os demais arquivos visuais para a raiz do repositório.
2. No GitHub, abra **Settings → Pages**.
3. Escolha **Deploy from a branch**.
4. Selecione a branch principal e a pasta `/root`.
5. Salve e aguarde a publicação.

A geolocalização do navegador funciona apenas em contexto seguro, como HTTPS. O GitHub Pages usa HTTPS.

## Privacidade

IP e localização podem ser dados pessoais. Mantenha um aviso claro de privacidade, limite o acesso à planilha e defina um prazo de retenção adequado.
