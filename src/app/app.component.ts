import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div style="text-align:center">
    <h1 class="mt-5">PreStyled Angular 5 w Toolchain</h1>
    <button type="button" name="button" class="btn my-3">
        <h2>HUZZAH</h2>
    </button>
    <p class="blue-grey-text">
    So <a href="https://mdbootstrap.com/css/colors/">this MDB library</a> appears to kick rocks... The colors below are all available as class properties. It's an enhanced Bootstrap!
    </p>
    <div class="card p-2 m-4">
      <p class="rgba-black-strong white-text">In Xanadu did Kubla Khan A stately pleasure-dome decree: Where Alph, the sacred river, ran</p>
      <p class="rgba-brown-strong blue-grey-text">Through caverns measureless to man Down to a sunless sea. So twice five miles of fertile ground </p>
      <p class="rgba-brown-light grey-text">With walls and towers were girdled round; And there were gardens bright with sinuous rills, </p>
      <p class="rgba-black-light brown-text">Where blossomed many an incense-bearing tree; And here were forests ancient as the hills, Enfolding sunny spots of greenery.</p>
      <p class="rgba-red-slight deep-orange-text">But oh! that deep romantic chasm which slanted Down the green hill athwart a cedarn cover!</p>
      <p class="rgba-pink-slight orange-text">A savage place! as holy and enchanted As e’er beneath a waning moon was haunted By woman wailing for her demon-lover! </p>
      <p class="rgba-purple-slight amber-text">And from this chasm, with ceaseless turmoil seething, As if this earth in fast thick pants were breathing, </p>
      <p class="rgba-indigo-slight yellow-text">A mighty fountain momently was forced: Amid whose swift half-intermitted burst </p>
      <p class="rgba-blue-slight lime-text">Huge fragments vaulted like rebounding hail, Or chaffy grain beneath the thresher’s flail: </p>
      <p class="rgba-cyan-slight light-green-text">And mid these dancing rocks at once and ever It flung up momently the sacred river. </p>
      <p class="rgba-teal-slight green-text">Five miles meandering with a mazy motion Through wood and dale the sacred river ran, </p>
      <p class="rgba-green-slight teal-text">Then reached the caverns measureless to man, And sank in tumult to a lifeless ocean; </p>
      <p class="rgba-lime-slight cyan-text">And ’mid this tumult Kubla heard from far Ancestral voices prophesying war! </p>
      <p class="rgba-yellow-slight light-blue-text">The shadow of the dome of pleasure Floated midway on the waves; Where was heard the mingled measure From the fountain and the caves. </p>
      <p class="rgba-orange-slight blue-text">It was a miracle of rare device, A sunny pleasure-dome with caves of ice! </p>
      <p class="rgba-brown-slight indigo-text">A damsel with a dulcimer In a vision once I saw: It was an Abyssinian maid And on her dulcimer she played, </p>
      <p class="rgba-grey-slight deep-purple-text">Singing of Mount Abora. Could I revive within me Her symphony and song, To such a deep delight ’twould win me, </p>
      <p class="rgba-blue-grey-slight purple-text">That with music loud and long, I would build that dome in air, That sunny dome! those caves of ice!</p>
      <p class="rgba-black-slight pink-text">And all who heard should see them there, And all should cry, Beware! Beware! His flashing eyes, his floating hair! </p>
      <p class="rgba-stylish-slight red-text">Weave a circle round him thrice, And close your eyes with holy dread For he on honey-dew hath fed, And drunk the milk of Paradise.</p>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'app';
}
