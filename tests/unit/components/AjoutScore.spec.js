import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import AjoutScore from '@/components/AjoutScore.vue'

Vue.use(BootstrapVue)

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const { expect } = chai

chai.use(sinonChai)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('AjoutScore.vue', () => {
  let store
  let getters
  let actions

  beforeEach(() => {
    getters = { nomJoueurCourant: () => 'Toto' }
    actions = { ajouterScore: sinon.stub() }
    store = new Vuex.Store({ getters, actions })
  })

  it('doit afficher le nom du joueur', () => {
    const wrapper = shallow(AjoutScore, { store, localVue })
    const h4 = wrapper.find('h4')
    expect(h4.text()).to.equal('Joueur : Toto')
  })
  it('doit afficher une case de saisie', () => {
    const wrapper = shallow(AjoutScore, { store, localVue })
    expect(wrapper.contains('input')).to.equal(true)
  })
  it('doit appeler la mutation sur saisie d\'une valeur', () => {
    const wrapper = shallow(AjoutScore, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 123
    input.trigger('click')
    // FIXME A corriger
  })
})
