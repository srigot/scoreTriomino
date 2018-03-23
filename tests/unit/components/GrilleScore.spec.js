import { expect } from 'chai';
import Vuex from 'vuex';
import { shallow, createLocalVue } from '@vue/test-utils';
import GrilleScore from '@/components/GrilleScore.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('GrilleScore.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        listeJoueurs: [],
      },
    });
  });

  it('doit afficher le contenu de listeJoueurs dans un tableau', () => {
    const msg = 'new message';
    const wrapper = shallow(GrilleScore, { store, localVue });
    expect(wrapper.text()).to.include(msg);
  });
});
