import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  stories: A([
    {
      title: 'Story 1',
      description: 'Lorem ipsum dolor amet vice ethical typewriter leggings chicharrones flexitarian. Live-edge actually single-origin coffee, skateboard activated charcoal direct trade art party crucifix shaman distillery. Food truck man braid paleo fam, portland celiac art party kitsch. Direct trade tousled hammock, forage enamel pin art party selfies. Snackwave vegan etsy, photo booth drinking vinegar four dollar toast tumeric pok pok kitsch bitters. Pork belly leggings cold-pressed venmo yuccie. Blog selvage keytar leggings irony fanny pack unicorn actually.'
    },
    {
      title: 'Story 2',
      description: 'Letterpress mumblecore cardigan tumblr mustache cold-pressed mlkshk neutra whatever. Taxidermy williamsburg polaroid edison bulb glossier taiyaki, schlitz lomo humblebrag wayfarers mlkshk squid pickled chartreuse locavore. Chia fixie swag bitters, kombucha +1 echo park coloring book celiac pok pok. Raw denim cronut church-key, skateboard man braid pok pok yuccie plaid craft beer aesthetic vinyl poke cred. Echo park mlkshk mustache, la croix +1 yr cold-pressed. Raw denim mixtape put a bird on it, pitchfork twee offal 8-bit adaptogen flexitarian everyday carry. Enamel pin vexillologist hot chicken sriracha live-edge, wolf coloring book kale chips cloud bread ennui heirloom semiotics chambray +1 swag.'
    }
  ])
});
