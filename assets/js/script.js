const images=["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/20160604_AUT_NED_8876_%28cropped%29.jpg/330px-20160604_AUT_NED_8876_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Florian_Wirtz%2C_2022-07-31%2C_Saisoner%C3%B6ffnung_Bayer_04%2C_Leverkusen_%281%29_%28cropped%29.jpg/330px-Florian_Wirtz%2C_2022-07-31%2C_Saisoner%C3%B6ffnung_Bayer_04%2C_Leverkusen_%281%29_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/CSKA-RM18_%287%29_%28cropped%29.jpg/330px-CSKA-RM18_%287%29_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg/330px-RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_%28cropped%29.jpg/330px-25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/330px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Harry_Kane_2023.jpg/330px-Harry_Kane_2023.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/ManCity20240722-031_%28cropped%29.jpg/330px-ManCity20240722-031_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vinicius_Jr_2021.jpg/330px-Vinicius_Jr_2021.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kevin_De_Bruyne_201807092.jpg/330px-Kevin_De_Bruyne_201807092.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bukayo_Saka.jpg/330px-Bukayo_Saka.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Phil_Foden_2022-11-21_1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_850_1625.jpg/330px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_850_1625.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/2022_FIFA_World_Cup_England_6%E2%80%932_Iran_-_%288%29_%28Declan_Rice%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mohamed_Salah_2018.jpg/330px-Mohamed_Salah_2018.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jamal_Musiala_2022_%28cropped%29.jpg/330px-Jamal_Musiala_2022_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bernardo_Silva_%28Isto_%C3%89_Gozar_Com_Quem_Trabalha%2C_2024%29.png/330px-Bernardo_Silva_%28Isto_%C3%89_Gozar_Com_Quem_Trabalha%2C_2024%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lamine_Yamal_2023_Barcelona_Juvenil_A_%28cropped%29.jpg/330px-Lamine_Yamal_2023_Barcelona_Juvenil_A_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Arsenal_v_Everton_%281%29_%28cropped%29.jpg/330px-Arsenal_v_Everton_%281%29_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Antonio_R%C3%BCdiger_Chelsea.jpg/330px-Antonio_R%C3%BCdiger_Chelsea.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Antoine_Griezmann_2018.jpg/330px-Antoine_Griezmann_2018.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/0K8A7984_%2853451306826%29_%28cropped%29.jpg/330px-0K8A7984_%2853451306826%29_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sadio_Man%C3%A9_-_Persepolis_F.C._v_Al_Nassr_FC%2C_19_September_2023.jpg/330px-Sadio_Man%C3%A9_-_Persepolis_F.C._v_Al_Nassr_FC%2C_19_September_2023.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Vincent_Aboubakar_in_2023_%28cropped%29.jpg/390px-Vincent_Aboubakar_in_2023_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Andr%C3%A9_Onana.jpg/330px-Andr%C3%A9_Onana.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Luka_Modric_Interview_2021_%28cropped%29.jpg/330px-Luka_Modric_Interview_2021_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Team_Korea_Russia_WorldCup_02_%28cropped%29.png/330px-Team_Korea_Russia_WorldCup_02_%28cropped%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2019147183134_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_0228_-_B70I8527_%28cropped%29.jpg/330px-2019147183134_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_0228_-_B70I8527_%28cropped%29.jpg",
];

document.addEventListener('DOMContentLoaded', _ => {
    const randImageIndex = ~~(Math.random() * images.length);
    document.getElementById('randImg').src = images[randImageIndex];
  });

