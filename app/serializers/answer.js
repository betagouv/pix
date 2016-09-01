import AirtableSerializer from "./airtable-serializer";

export default AirtableSerializer.extend({

  transformFields(fields) {
    return {
      value: fields['Valeur'],
      challenge: fields['Epreuve'],
      assessment: fields['Evaluation']
    };
  },

  serializeIntoHash: function (data, type, record, options) {
    data['fields'] = this.serialize(record, options);
  },

  serialize: function (snapshot, options) {
    return {
      "Valeur": snapshot.attr('value'),
      "Epreuve": [
        snapshot.belongsTo('challenge', { id: true })
      ],
      "Evaluation": [
        snapshot.belongsTo('assessment', { id: true })
      ]
    };
  }
});
