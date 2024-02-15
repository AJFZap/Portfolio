/* global $ */
/* eslint-env jquery */
/*eslint-env es6*/
/*eslint-env browser*/

// When the a language buttons are clicked the special class is added to it. The buttons are the ones in the Dropdown menu and the default navbar language menu.

const enBtn = document.querySelectorAll(".en");
const esBtn = document.querySelectorAll(".es");
const jpBtn = document.querySelectorAll(".jp");

// Starts with english being selected by default.

enBtn[0].classList.add('language_selected');
enBtn[1].classList.add('language_selected');

enBtn[0].addEventListener('click', () => {
            enBtn[0].classList.add('language_selected');
            enBtn[1].classList.add('language_selected');
            esBtn[0].classList.remove('language_selected');
            esBtn[1].classList.remove('language_selected');
            jpBtn[0].classList.remove('language_selected');
            jpBtn[1].classList.remove('language_selected');
        });

enBtn[1].addEventListener('click', () => {
            enBtn[0].classList.add('language_selected');
            enBtn[1].classList.add('language_selected');
            esBtn[0].classList.remove('language_selected');
            esBtn[1].classList.remove('language_selected');
            jpBtn[0].classList.remove('language_selected');
            jpBtn[1].classList.remove('language_selected');
        });

esBtn[0].addEventListener('click', () => {
            esBtn[0].classList.add('language_selected');
            esBtn[1].classList.add('language_selected');
            enBtn[0].classList.remove('language_selected');
            enBtn[1].classList.remove('language_selected');
            jpBtn[0].classList.remove('language_selected');
            jpBtn[1].classList.remove('language_selected');
        });

esBtn[1].addEventListener('click', () => {
            esBtn[0].classList.add('language_selected');
            esBtn[1].classList.add('language_selected');
            enBtn[0].classList.remove('language_selected');
            enBtn[1].classList.remove('language_selected');
            jpBtn[0].classList.remove('language_selected');
            jpBtn[1].classList.remove('language_selected');
        });

jpBtn[0].addEventListener('click', () => {
            jpBtn[0].classList.add('language_selected');
            jpBtn[1].classList.add('language_selected');
            esBtn[0].classList.remove('language_selected');
            esBtn[1].classList.remove('language_selected');
            enBtn[0].classList.remove('language_selected');
            enBtn[1].classList.remove('language_selected');
        });

jpBtn[1].addEventListener('click', () => {
            jpBtn[0].classList.add('language_selected');
            jpBtn[1].classList.add('language_selected');
            esBtn[0].classList.remove('language_selected');
            esBtn[1].classList.remove('language_selected');
            enBtn[0].classList.remove('language_selected');
            enBtn[1].classList.remove('language_selected');
        });

/* English */

$(function() {
    $(".en").click(function() {
        
        // Navbar
        
        $(".logo a").text("Ariel Zappia");
        $(".links li:nth-child(1) a").text("About Me");
        $(".links li:nth-child(2) a").text("Works");
        $(".links li:nth-child(3) a").text("Contact");
        $(".links li:nth-child(4) a").text("Language");
        $("#language_menu").append(' <i class="fa-solid fa-caret-down"></i>');
        $(".links li:nth-child(4) ul li:nth-child(1) a ").text("Español");
        $(".links li:nth-child(4) ul li:nth-child(2) a ").text("English");
        $(".links li:nth-child(4) ul li:nth-child(3) a ").text("日本語");
        
        // Dropdown menu
        
        $(".dropdown_menu li:nth-child(1) a").text("About Me");
        $(".dropdown_menu li:nth-child(2) a").text("Works");
        $(".dropdown_menu li:nth-child(3) a").text("Contact");
        $(".dropdown_menu li:nth-child(4) a").text("Language");
        $(".dropdown_menu li:nth-child(4) a").append(' <i class="fa-solid fa-caret-down"></i>');
        $(".items ul li:nth-child(1) a").text("Español");
        $(".items ul li:nth-child(2) a").text("English");
        $(".items ul li:nth-child(3) a").text("日本語");
        
        // About me Section
        
        $(".bio-content").children().eq(0).text("Hello, I am");
        $(".bio-content").children().eq(1).text("Ariel Zappia");
        $(".bio-content").children().eq(2).text("And I'am a ");
        $(".bio-content").children().eq(2).append('<span class="multiple-words"></span>');
        const typed = new Typed('.multiple-words', {
        strings: ['Software Developer.', 'Mobile Developer.' ,'Full-Stack Developer.', 'Dream Maker.'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true 
        });
        $(".bio-content").children().eq(3).text("I'm an Argentinean self-taught programmer with five years of coding experience. My main projects have been video games and day-to-day apps. I'm proficient in Python, C, C# and JavaScript.");
        $(".bio-content").children().eq(3).append('<br>I worked as a computer technician until I decided to jump into coding and ended up as a freelancer, looking to advance my skills by developing new projects as I hope to help companies and individuals grow their businesess.');
        
        $(".bio-content").children().eq(4).text("See my work");
        
        // Works and Projects Section.
        
        $(".heading").text("Latest");
        $(".heading").append('<span class="workspan"> Works</span>');
        $(".hori-desc").text("A multi-platform infinite space runner available for mobile and desktop.");
        $(".fox-desc").text("A 2D platformer game available for Mobile and Desktop.");
        $(".lock-desc").text("A multi-platform logic puzzle game where the player has to guess the randomly generated password.");
        $(".fit-desc").text("An app that provides a training routine and tracks the progress of the user.");
        $(".stock-desc").text("An app that provides a safe environment to practice and learn the art of investing.");
        $(".graf-desc").text("A Desktop app available on Windows, Linux and MacOS for graphologist.");
        
        // Contact Section.
        
        $("#cont-head").text("Contact");
        $("#cont-head").append('<span> Me!</span>');
        $(".media div label").eq(0).text("My linkedin.");
        $(".media div label").eq(1).text("My Github.");
        $(".media div label").eq(2).text("My Email.");
        $(".media div label").eq(3).text("My Whatsapp.");
        $(".input_group label").eq(0).text(" Your Email");
        $(".input_group label").eq(0).prepend('<i class="fa-solid fa-envelope"></i>');
        $(".input_group label").eq(1).text(" Your Name");
        $(".input_group label").eq(1).prepend('<i class="fa-solid fa-user"></i>');
        $(".input_group label").eq(2).text(" Write your message here, Please.");
        $(".input_group label").eq(2).prepend('<i class="fa-solid fa-message"></i>');
        $(".mail-button").text("Send");
        $(".cv-button").text("Download my CV");
        
        // Footer.
        
        $(".footer-text > p").text("Copyright &copy; 2023 by Ariel Zappia | All rights reserved.");
        $(".go-top a").attr("title", "Go back to the top");
    });
});

 /* Español */

$(function() {
    $(".es").click(function() {
       
        // Navbar
        
        $(".logo a").text("Ariel Zappia");
        $(".links li:nth-child(1) a").text("Sobre Mi");
        $(".links li:nth-child(2) a").text("Trabajos");
        $(".links li:nth-child(3) a").text("Contacto");
        $(".links li:nth-child(4) a").text("Idioma");
        $("#language_menu").append(' <i class="fa-solid fa-caret-down"></i>');
        $(".links li:nth-child(4) ul li:nth-child(1) a ").text("Español");
        $(".links li:nth-child(4) ul li:nth-child(2) a ").text("English");
        $(".links li:nth-child(4) ul li:nth-child(3) a ").text("日本語");
        
        // Dropdown menu
        
        $(".dropdown_menu li:nth-child(1) a").text("Sobre Mi");
        $(".dropdown_menu li:nth-child(2) a").text("Trabajos");
        $(".dropdown_menu li:nth-child(3) a").text("Contacto");
        $(".dropdown_menu li:nth-child(4) a").text("Idioma");
        $(".dropdown_menu li:nth-child(4) a").append(' <i class="fa-solid fa-caret-down"></i>');
        
        $(".items ul li:nth-child(1) a").text("Español");
        $(".items ul li:nth-child(2) a").text("English");
        $(".items ul li:nth-child(3) a").text("日本語");
    
        // About me Section
        
        $(".bio-content").children().eq(0).text("Hola, soy");
        $(".bio-content").children().eq(1).text("Ariel Zappia");
        $(".bio-content").children().eq(2).text("Y soy un ");
        $(".bio-content").children().eq(2).append('<span class="multiple-words" id="multi-words"> </span>');
        const typed = new Typed('.multiple-words', {
        strings: ['0', 'Desarrollador de software.', 'Desarrollador móvil.', 'Desarrollador Full-Stack.', 'Hacedor de Sueños.'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true 
        });
        $(".bio-content").children().eq(3).text("Soy un programador autodidacta argentino con cinco años de experiencia en programación. Mis principales proyectos han sido videojuegos y aplicaciones del día a día. Soy hábil en Python, C, C# y JavaScript.");
        $(".bio-content").children().eq(3).append('<br>Trabajé como técnico en informática hasta que decidí cambiar a programacion y terminé como freelancer, buscando mejorar mis habilidades desarrollando nuevos proyectos con la esperanza de ayudar a empresas e individuos a hacer crecer sus negocios.');
        $(".bio-content").children().eq(4).text("Mira mis trabajos");
        
        // Works Section
        
        $(".heading").text("Ultimos");
        $(".heading").append('<span class="workspan"> Trabajos</span>');
        $(".hori-desc").text("Un runner infinito multiplataforma para dispositivos móviles y de escritorio.");
        $(".fox-desc").text("Un juego de plataformas en 2D disponible para dispositivos móviles y PC.");
        $(".lock-desc").text("Un multiplataforma de lógica en el que debe descubrirse el código numérico aleatoriamente generado.");
        $(".fit-desc").text("Una aplicación que provee al usuario de una rutina de entrenamiento que a su vez registra su progreso.");
        $(".stock-desc").text("Una aplicación que provee un ambiente seguro para practicar el arte de la inversión.");
        $(".graf-desc").text("Una aplicación de escritorio disponible en Windows, Linux y MacOS para grafólogos.");
        
        // Contact Section.
        
        $("#cont-head").text("Conta");
        $("#cont-head").append('<span>ctame!</span>');
        $(".media div label").eq(0).text("Mi linkedin.");
        $(".media div label").eq(1).text("Mi Github.");
        $(".media div label").eq(2).text("Mi Email.");
        $(".media div label").eq(3).text("Mi Whatsapp.");
        $(".input_group label").eq(0).text(" Tu Mail");
        $(".input_group label").eq(0).prepend('<i class="fa-solid fa-envelope"></i>');
        $(".input_group label").eq(1).text(" Tu Nombre");
        $(".input_group label").eq(1).prepend('<i class="fa-solid fa-user"></i>');
        $(".input_group label").eq(2).text(" Escriba aqui su mensaje, Por favor.");
        $(".input_group label").eq(2).prepend('<i class="fa-solid fa-message"></i>');
        $(".mail-button").text("Enviar");
        $(".cv-button").text("Descarga mi CV");
        
        // Footer.
        
        $(".footer-text p").text("Derechos de autor © 2023 por Ariel Zappia | Todos los derechos reservados.");
        $(".go-top a").attr("title", "Volver arriba");
    });
});

 /* 日本語 */

$(function() {
    $(".jp").click(function() {
       
        // Navbar
        
        $(".logo a").text("ザピア・アリエル");
        $(".links li:nth-child(1) a").text("私について");
        $(".links li:nth-child(2) a").text("作品");
        $(".links li:nth-child(3) a").text("連絡");
        $(".links li:nth-child(4) a").text("言語");
        $("#language_menu").append(' <i class="fa-solid fa-caret-down"></i>');
        $(".links li:nth-child(4) ul li:nth-child(1) a ").text("Español");
        $(".links li:nth-child(4) ul li:nth-child(2) a ").text("English");
        $(".links li:nth-child(4) ul li:nth-child(3) a ").text("日本語");
        
        // Dropdown menu
        
        $(".dropdown_menu li:nth-child(1) a").text("私について");
        $(".dropdown_menu li:nth-child(2) a").text("作品");
        $(".dropdown_menu li:nth-child(3) a").text("連絡");     
        $(".dropdown_menu li:nth-child(4) a").text("言語");
        $(".dropdown_menu li:nth-child(4) a").append(' <i class="fa-solid fa-caret-down"></i>');
        $(".items ul li:nth-child(1) a").text("Español");
        $(".items ul li:nth-child(2) a").text("English");
        $(".items ul li:nth-child(3) a").text("日本語");
        
        // About me Section
        
        $(".bio-content").children().eq(0).text("こんにちは私は");
        $(".bio-content").children().eq(1).text("ザピア・アリエル");
        $(".bio-content").children().eq(2).text("そして私は");
        $(".bio-content").children().eq(2).append('<span class="multiple-words" id="multi-words"> </span>');
        const typed = new Typed('.multiple-words', {
        strings: ['0','ソフトウェア開発者。', 'モバイル開発者。','フルスタック開発者。', '夢を作る人。'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true 
        });
        $(".bio-content").children().eq(3).text("私はアルゼンチン人の独学プログラマーで、5 年間のコーディング経験があります。 私の主なプロジェクトは、ビデオ ゲームと日常のアプリです。 私は Python、C、C#、および JavaScript に堪能です。");
        $(".bio-content").children().eq(3).append('<br>私はコーディングの分野に飛び込むまでコンピューター技術者として働いていましたが、企業や個人のビジネスの成長を支援したいと考え、新しいプロジェクトを開発してスキルを向上させたいと考え、最終的にはフリーランサーになりました。');
        $(".bio-content").children().eq(4).text("私の作品を見て");
        
        // Works Section
        
        $(".heading").text("最新");
        $(".heading").append('<span class="workspan"> 作品</span>');
        $(".hori-desc").text("モバイルとデスクトップで利用できるマルチプラットフォームの無限スペース ランナー。");
        $(".fox-desc").text("モバイルとデスクトップで利用できる 2D プラットフォーマー ゲーム。");
        $(".lock-desc").text("プレーヤーがランダムに生成された数字のパスワードを推測しなければならないマルチプラットフォームのロジック パズル ゲーム。");
        $(".fit-desc").text("トレーニング ルーチンを提供し、ユーザーの進捗状況を追跡するアプリ。");
        $(".stock-desc").text("投資の芸術を練習し、学ぶための安全な環境を提供するアプリ。");
        $(".graf-desc").text("筆跡学者向けの Windows、Linux、MacOS で利用できるデスクトップ アプリ。");
        
        // Contact Section.
        
        $("#cont-head").text("私に");
        $("#cont-head").append('<span>連絡して!</span>');
        $(".media div label").eq(0).text("私のリンクイン。");
        $(".media div label").eq(1).text("私のギットハブ。");
        $(".media div label").eq(2).text("私のEメール。");
        $(".media div label").eq(3).text("私のワッツアップ。");
        $(".input_group label").eq(0).text(" あなたのメールアドレス");
        $(".input_group label").eq(0).prepend('<i class="fa-solid fa-envelope"></i>');
        $(".input_group label").eq(1).text(" あなたの名前");
        $(".input_group label").eq(1).prepend('<i class="fa-solid fa-user"></i>');
        $(".input_group label").eq(2).text(" ここにメッセージを書いてください。");
        $(".input_group label").eq(2).prepend('<i class="fa-solid fa-message"></i>');
        $(".mail-button").text("送信");
        $(".cv-button").text("トップに戻る");
        
        // Footer.
        
        $(".footer-text > p").text("著作権 © 2023 アリエル・ザッピア | 全著作権所有。");
        $(".go-top a").attr("title", "トップに戻る");
    });
});