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
    expect(h4.text()).to.equal('Toto')
  })
  it('doit afficher une case de saisie', () => {
    const wrapper = shallow(AjoutScore, { store, localVue })
    expect(wrapper.contains('input')).to.equal(true)
  })
  it('doit appeler la mutation sur saisie d\'une valeur', () => {
    const wrapper = shallow(AjoutScore, { store, localVue })
    const input = wrapper.find('input')
    wrapper.vm.valeur = 123
    input.trigger('keyup.enter')
    expect(actions.ajouterScore).to.have.been.calledWith(sinon.match.any, 123)
  })
  it('doit retirer 5 si on clique sur le bouton PIOCHE', () => {
    const wrapper = shallow(AjoutScore, { store, localVue })
    const btnPioche = wrapper.find('#pioche')
    btnPioche.trigger('click')
    expect(wrapper.vm.pioche).to.equal(1)
    wrapper.vm.valeur = 2
    wrapper.find('input').trigger('keyup.enter')
    expect(actions.ajouterScore).to.have.been.calledWith(sinon.match.any, -3)
  })
  it('doit retirer 25 si on clique 4 fois sur le bouton PIOCHE', () => {
    const wrapper = shallow(AjoutScore, { store, localVue })
    const btnPioche = wrapper.find('#pioche')
    btnPioche.trigger('click')
    expect(wrapper.vm.pioche).to.equal(1)
    btnPioche.trigger('click')
    expect(wrapper.vm.pioche).to.equal(2)
    btnPioche.trigger('click')
    expect(wrapper.vm.pioche).to.equal(3)
    btnPioche.trigger('click')
    expect(actions.ajouterScore).to.have.been.calledWith(sinon.match.any, -25)
    expect(wrapper.vm.pioche).to.equal(0)
  })
  it('doit mettre 0 si aucune saisie', () => {
    const wrapper = shallow(AjoutScore, { store, localVue })
    const input = wrapper.find('input')
    input.trigger('keyup.enter')
    expect(actions.ajouterScore).to.have.been.calledWith(sinon.match.any, 0)
  })
})
