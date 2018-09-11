import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { LessonData } from '../../assets/lessonData/assimil';
// import * as data from '../../assets/lessonData/assimil';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lessons = [{ directoryName: "", fileName: "", path: "" }]
  assimilFrench = []

  constructor(public navCtrl: NavController, ) {

    let lesson1 = {
      directoryName: '/assets/audio/L001-French ASSIMIL',
      fileName: 'French-L001-N1.mp3',
      path: '/assets/audio/L001-French ASSIMIL/French-L001-N1.mp3'
    }

    let lesson2 = {
      directoryName: '/assets/audio/L001-French ASSIMIL',
      fileName: 'French-L001-S00-TITLE.mp3',
      path: '/assets/audio/L001-French ASSIMIL/French-L001-S00-TITLE.mp3'
    }

  //  let assmilTxt = [{"title":"N1-PREMIÈRE LEÇON","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-N1.mp3"},{"title":"S01-Pardon, madame. Où est le métro Saint-Michel ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S01.mp3"},{"title":"S00-TITLE-À Paris","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S00-TITLE.mp3"},{"title":"S02-Le métro Saint-Michel ? Attendez une minute...","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S02.mp3"},{"title":"S03-Nous sommes au boulevard Saint-Michel. La fontaine est là-bas.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S03.mp3"},{"title":"S04-Oui, d'accord. Mais où est le métro, s'il vous plaît ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S04.mp3"},{"title":"S05-Mais bien sûr ! Voilà la Seine, et voici le pont.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S05.mp3"},{"title":"S06-C'est joli ; mais s'il vous plaît...","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S06.mp3"},{"title":"S07-Ce n'est pas à gauche, alors c'est à droite.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S07.mp3"},{"title":"S08-Voilà. Le métro est à droite !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S08.mp3"},{"title":"S09-Mais vous êtes sûre ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S09.mp3"},{"title":"S10-Non. Je suis touriste aussi !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S10.mp3"},{"title":"T00-TRANSLATE-EXERCICES","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T00-TRANSLATE.mp3"},{"title":"T01-Je suis à Paris ; nous sommes à Paris.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T01.mp3"},{"title":"T02-Vous êtes sûr ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T02.mp3"},{"title":"T03-Attendez une minute, s'il vous plaît.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T03.mp3"},{"title":"T04-Voilà la fontaine et voici le métro.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T04.mp3"},{"title":"T05-Mais bien sûr !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T05.mp3"},{"title":"N2-DEUXIÈME LEÇON","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/N2.mp3"},{"title":"S00-TITLE-Au magasin","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S00-TITLE.mp3"},{"title":"S01-S'il vous plaît, madame, est-ce qu'il est cher, ce chapeau ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S01.mp3"},{"title":"S02-Non, il n'est pas cher. Le prix est très raisonnable.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S02.mp3"},{"title":"S03-Bon. Et... Où sont les gants ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S03.mp3"},{"title":"S04-Les gants sont là-bas. Vous voyez ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S04.mp3"},{"title":"S05-Ah, merci... Mais, est-ce qu'ils sont en laine ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S05.mp3"},{"title":"S06-Non, ils ne sont pas en laine, ils sont en acrylique.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S06.mp3"},{"title":"S08-Comment ? Ah, je comprends, vous attendez votre mari !","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S08.mp3"},{"title":"S09-Oui, c'est ça... et... il pleut dehors, alors...","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S09.mp3"},{"title":"S07-Bon. Euh... est-ce qu'il est cinq heures ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S07.mp3"},{"title":"S10-Non, madame... Il n'est pas cinq heures !","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S10.mp3"},{"title":"T00-TRANSLATE-EXERCICES","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T00-TRANSLATE.mp3"},{"title":"T01-Est-ce que vous êtes sûr ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T01.mp3"},{"title":"T02-Est-ce qu'il est cher, ce chapeau ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T02.mp3"},{"title":"T03-Est-ce que vous voyez la fontaine ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T03.mp3"},{"title":"T04-Il n'est pas cinq heures.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T04.mp3"},{"title":"T05-Est-ce que le prix est raisonnable ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T05.mp3"},{"title":"N3-TROISIÈME LEÇON","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/N3.mp3"},{"title":"S00-TITLE-Au café","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S00-TITLE.mp3"},{"title":"S01-Messieurs, vous désirez ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S01.mp3"},{"title":"S02-Deux cafés, s'il vous plaît, et deux croissants chauds.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S02.mp3"},{"title":"S03-Ah... vous êtes Anglais ? Oui, je suis de London, pardon, Londres.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S03.mp3"},{"title":"S04-Mais vous parlez bien le français. Merci, vous êtes gentil.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S04.mp3"},{"title":"S05-Nous, les Français, nous sommes tous gentils !","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S05.mp3"},{"title":"S06-Pardon messieurs, voici les cafés et les tartines beurrées.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S06.mp3"},{"title":"S07-Et alors ? Où sont les croissants ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S07.mp3"},{"title":"S09-Alors, vous êtes sûr qu'ils sont toujours gentils, les Français ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S09.mp3"},{"title":"S08-Excusez-moi, messieurs... Et dépêchez-vous !","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S08.mp3"},{"title":"T00-TRANSLATE-EXERCICES","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T00-TRANSLATE.mp3"},{"title":"T01-Vous parlez bien le français.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T01.mp3"},{"title":"T02-Deux cafés, s'il vous plaît.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T02.mp3"},{"title":"T03-Voici les cafés et les croissants.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T03.mp3"},{"title":"T04-Ah, vous êtes Anglais ? Oui, c'est ça.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T04.mp3"},{"title":"T05-Est-ce que vous êtes toujours gentil ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T05.mp3"}]

  //  let assmilTxt = [{"title":"PREMIÈRE LEÇON","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-N1.mp3"},{"title":"À Paris","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S00-TITLE.mp3"},{"title":"Pardon, madame. Où est le métro Saint-Michel ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S01.mp3"},{"title":"Le métro Saint-Michel ? Attendez une minute...","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S02.mp3"},{"title":"Nous sommes au boulevard Saint-Michel. La fontaine est là-bas.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S03.mp3"},{"title":"Oui, d'accord. Mais où est le métro, s'il vous plaît ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S04.mp3"},{"title":"Mais bien sûr ! Voilà la Seine, et voici le pont.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S05.mp3"},{"title":"C'est joli ; mais s'il vous plaît...","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S06.mp3"},{"title":"Ce n'est pas à gauche, alors c'est à droite.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S07.mp3"},{"title":"Voilà. Le métro est à droite !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S08.mp3"},{"title":"Mais vous êtes sûre ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S09.mp3"},{"title":"Non. Je suis touriste aussi !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S10.mp3"},{"title":"TRANSLATE-EXERCICES","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T00-TRANSLATE.mp3"},{"title":"Je suis à Paris ; nous sommes à Paris.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T01.mp3"},{"title":"Vous êtes sûr ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T02.mp3"},{"title":"Attendez une minute, s'il vous plaît.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T03.mp3"},{"title":"Voilà la fontaine et voici le métro.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T04.mp3"},{"title":"Mais bien sûr !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T05.mp3"},{"title":"DEUXIÈME LEÇON","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/N2.mp3"},{"title":"Au magasin","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S00-TITLE.mp3"},{"title":"S'il vous plaît, madame, est-ce qu'il est cher, ce chapeau ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S01.mp3"},{"title":"Non, il n'est pas cher. Le prix est très raisonnable.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S02.mp3"},{"title":"Bon. Et... Où sont les gants ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S03.mp3"},{"title":"Les gants sont là-bas. Vous voyez ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S04.mp3"},{"title":"Ah, merci... Mais, est-ce qu'ils sont en laine ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S05.mp3"},{"title":"Non, ils ne sont pas en laine, ils sont en acrylique.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S06.mp3"},{"title":"Bon. Euh... est-ce qu'il est cinq heures ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S07.mp3"},{"title":"Comment ? Ah, je comprends, vous attendez votre mari !","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S08.mp3"},{"title":"Oui, c'est ça... et... il pleut dehors, alors...","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S09.mp3"},{"title":"Non, madame... Il n'est pas cinq heures !","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S10.mp3"},{"title":"TRANSLATE-EXERCICES","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T00-TRANSLATE.mp3"},{"title":"Est-ce que vous êtes sûr ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T01.mp3"},{"title":"Est-ce que vous voyez la fontaine ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T03.mp3"},{"title":"Est-ce que le prix est raisonnable ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T05.mp3"},{"title":"Est-ce qu'il est cher, ce chapeau ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T02.mp3"},{"title":"Il n'est pas cinq heures.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T04.mp3"},{"title":"TROISIÈME LEÇON","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/N3.mp3"},{"title":"Au café","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S00-TITLE.mp3"},{"title":"Messieurs, vous désirez ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S01.mp3"},{"title":"Ah... vous êtes Anglais ? Oui, je suis de London, pardon, Londres.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S03.mp3"},{"title":"Deux cafés, s'il vous plaît, et deux croissants chauds.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S02.mp3"},{"title":"Nous, les Français, nous sommes tous gentils !","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S05.mp3"},{"title":"Pardon messieurs, voici les cafés et les tartines beurrées.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S06.mp3"},{"title":"Mais vous parlez bien le français. Merci, vous êtes gentil.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S04.mp3"},{"title":"Et alors ? Où sont les croissants ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S07.mp3"},{"title":"Excusez-moi, messieurs... Et dépêchez-vous !","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S08.mp3"},{"title":"Alors, vous êtes sûr qu'ils sont toujours gentils, les Français ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S09.mp3"},{"title":"TRANSLATE-EXERCICES","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T00-TRANSLATE.mp3"},{"title":"Vous parlez bien le français.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T01.mp3"},{"title":"Deux cafés, s'il vous plaît.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T02.mp3"},{"title":"Voici les cafés et les croissants.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T03.mp3"},{"title":"Ah, vous êtes Anglais ? Oui, c'est ça.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T04.mp3"},{"title":"Est-ce que vous êtes toujours gentil ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T05.mp3"}]

   let assmilTxt = [{"title":"PREMIÈRE LEÇON","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-N1.mp3"},{"title":"À Paris","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S00-TITLE.mp3"},{"title":"Pardon, madame. Où est le métro Saint-Michel ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S01.mp3"},{"title":"Le métro Saint-Michel ? Attendez une minute...","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S02.mp3"},{"title":"Nous sommes au boulevard Saint-Michel. La fontaine est là-bas.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S03.mp3"},{"title":"Oui, d'accord. Mais où est le métro, s'il vous plaît ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S04.mp3"},{"title":"Mais bien sûr ! Voilà la Seine, et voici le pont.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S05.mp3"},{"title":"C'est joli ; mais s'il vous plaît...","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S06.mp3"},{"title":"Ce n'est pas à gauche, alors c'est à droite.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S07.mp3"},{"title":"Voilà. Le métro est à droite !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S08.mp3"},{"title":"Mais vous êtes sûre ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S09.mp3"},{"title":"Non. Je suis touriste aussi !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-S10.mp3"},{"title":"Je suis à Paris ; nous sommes à Paris.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T01.mp3"},{"title":"Vous êtes sûr ?","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T02.mp3"},{"title":"Attendez une minute, s'il vous plaît.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T03.mp3"},{"title":"Voilà la fontaine et voici le métro.","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T04.mp3"},{"title":"Mais bien sûr !","album":"ASSIMIL French - L001","path":"./audio/L001-French ASSIMIL/French-L001-T05.mp3"},{"title":"DEUXIÈME LEÇON","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/N2.mp3"},{"title":"Au magasin","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S00-TITLE.mp3"},{"title":"S'il vous plaît, madame, est-ce qu'il est cher, ce chapeau ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S01.mp3"},{"title":"Non, il n'est pas cher. Le prix est très raisonnable.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S02.mp3"},{"title":"Bon. Et... Où sont les gants ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S03.mp3"},{"title":"Les gants sont là-bas. Vous voyez ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S04.mp3"},{"title":"Ah, merci... Mais, est-ce qu'ils sont en laine ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S05.mp3"},{"title":"Non, ils ne sont pas en laine, ils sont en acrylique.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S06.mp3"},{"title":"Bon. Euh... est-ce qu'il est cinq heures ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S07.mp3"},{"title":"Comment ? Ah, je comprends, vous attendez votre mari !","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S08.mp3"},{"title":"Oui, c'est ça... et... il pleut dehors, alors...","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S09.mp3"},{"title":"Non, madame... Il n'est pas cinq heures !","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/S10.mp3"},{"title":"Est-ce que vous êtes sûr ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T01.mp3"},{"title":"Est-ce qu'il est cher, ce chapeau ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T02.mp3"},{"title":"Est-ce que vous voyez la fontaine ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T03.mp3"},{"title":"Il n'est pas cinq heures.","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T04.mp3"},{"title":"Est-ce que le prix est raisonnable ?","album":"ASSIMIL French - L002","path":"./audio/L002-French ASSIMIL/T05.mp3"},{"title":"TROISIÈME LEÇON","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/N3.mp3"},{"title":"Au café","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S00-TITLE.mp3"},{"title":"Messieurs, vous désirez ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S01.mp3"},{"title":"Deux cafés, s'il vous plaît, et deux croissants chauds.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S02.mp3"},{"title":"Ah... vous êtes Anglais ? Oui, je suis de London, pardon, Londres.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S03.mp3"},{"title":"Mais vous parlez bien le français. Merci, vous êtes gentil.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S04.mp3"},{"title":"Nous, les Français, nous sommes tous gentils !","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S05.mp3"},{"title":"Pardon messieurs, voici les cafés et les tartines beurrées.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S06.mp3"},{"title":"Et alors ? Où sont les croissants ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S07.mp3"},{"title":"Excusez-moi, messieurs... Et dépêchez-vous !","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S08.mp3"},{"title":"Alors, vous êtes sûr qu'ils sont toujours gentils, les Français ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/S09.mp3"},{"title":"Vous parlez bien le français.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T01.mp3"},{"title":"Deux cafés, s'il vous plaît.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T02.mp3"},{"title":"Voici les cafés et les croissants.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T03.mp3"},{"title":"Ah, vous êtes Anglais ? Oui, c'est ça.","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T04.mp3"},{"title":"Est-ce que vous êtes toujours gentil ?","album":"ASSIMIL French - L003","path":"./audio/L003-French ASSIMIL/T05.mp3"}]



   this.assimilFrench = this.processTheLessons(assmilTxt)
    console.log(this.assimilFrench)

    this.lessons = [lesson1, lesson2]
 
    this.splitUpSentence('Excusez-moi, messieurs... Et dépêchez-vous')


  }
  
ionViewDidLoad() {
  
}

processTheLessons(lessons) {
  lessons.forEach(item=> {
    //removes the dot at the beginning of the audio path and adds /assets
    item.path = "/assets" + item.path.substr(1)
  })
  let sortedLessons = lessons.sort(this.compare)

  let groupedLessons = []
  let lastItemAlbum
  sortedLessons.forEach(item=> {
    
    if(lastItemAlbum != item.album) {
      let myLesson = {
        album: item.album,
       sentences: [{title: item.title, path: item.path}]
      }
      lastItemAlbum = item.album
      groupedLessons.push(myLesson)
    } else {
      let lastIndex = groupedLessons.length-1
      groupedLessons[lastIndex].sentences.push({title: item.title, path: item.path})
      
    }
  })

  groupedLessons.forEach(item=> {
   
    item.sentences.sort(this.sortSentences)
   
  })

  return groupedLessons
}

compare(a,b) {
  if (a.album  < b.album )
    return -1;
  if (a.album > b.album)
    return 1;
  return 0;
}

sortSentences(a, b) {
  if (a.path  <  b.path)
    return -1;
  if (a.path > b.path)
    return 1;
  return 0;
}

reviewLesson(lesson) {
  this.navCtrl.push('ReviewALessonPage', {lesson: lesson} )
}


  splitUpSentence(sentence) {
    let output = []
    console.log(sentence)
    let splitUpWords = new RegExp(/\b(?![-A-zÀ-ÿ])/)
    let step1 = sentence.split(splitUpWords)
    console.log(step1)
    let removeStart = new RegExp(/(?<![-A-zÀ-ÿ])\b/)
    step1.forEach(item => {
      let myPiece = item.split(removeStart)
      myPiece.forEach(piece => {
        output.push(piece)
      })
    })

    console.log(output)
  }


}
