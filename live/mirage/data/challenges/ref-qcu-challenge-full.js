// QCM challenge with all field filled
export default {
  data: {
    type: 'challenges',
    id: 'ref_qcu_challenge_full_id',
    attributes: {
      type: 'QCM',
      instruction: "Un QCU ne propose a l\'utilisateur qu\'un seul choix [parmi](http://link.parmi.url) plusieurs",
      'attachment-url': 'http://example_of_url',
      'attachment-filename': 'example_of_filename.pdf',
      'illustration-url': 'http://fakeimg.pl/350x200/?text=PictureOfQCU',
      proposals: "- premier choix, ou bien" + 
              "\n - deuxieme choix, ou bien" + 
              "\n - troisieme choix"
    }
  }
};
