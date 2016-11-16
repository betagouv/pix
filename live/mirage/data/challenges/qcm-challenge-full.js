// QCM challenge with all field filled
export default {
  data: {
    type: 'challenges',
    id: 'qcm_challenge_full_id',
    attributes: {
      type: 'QCM',
      instruction: "This is the instruction of [one](http://link.1.url) QCM",
      'attachment-url': 'http://example_of_url',
      'attachment-filename': 'example_of_filename.pdf',
      'illustration-url': 'http://fakeimg.pl/350x200/?text=PictureOfQCM&font=lobster',
      proposals: "- possibility A" + 
              "\n - possibility B" + 
              "\n - possibility C"
    }
  }
};
