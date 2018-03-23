import { expect } from 'chai';
import Vuex from 'vuex';
import { shallow, createLocalVue } from '@vue/test-utils';
import GrilleScore from '@/components/GrilleScore.vue';
import Joueur from '@/modele/Joueur';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('GrilleScore.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        listeJoueurs: [new Joueur(1, 'Toto'), new Joueur(2, ('Titi'))],
      },
    });
  });

  it('doit afficher le contenu de listeJoueurs dans un tableau', () => {
    const wrapper = shallow(GrilleScore, { store, localVue });
    expect(wrapper.contains('table')).to.equal(true);
  });
});
