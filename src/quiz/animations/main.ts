// • In src / quiz / animation / main.ts, we are animating three images alice1, alice2, alice3.They
// must be animated one after the other, that is, alice2 must begin animation after alice1
// has completed and so on.
// • The animate() method is a Web Animation API, which returns an Animation object
// that is used by the browser to perform the animation.This method has a property
// called finished, which returns a promise that can be used to indicate that the
// animation for the object is complete.
// • The code right now looks a lot like callback hell.Simplify it using aync await.
// • After you complete, compile the ts file to js(use command in README) and open
// index.html in the browser.

const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

// if(alice10 && alice20 && alice30) {
//   // Promise chain  
//   alice10.animate(aliceTumbling1, aliceTiming1).finished  
//     .then(() => {
//         return alice20
//                 .animate(aliceTumbling1, aliceTiming1)
//                 .finished;     
//     })
//     .then(() => {
//       return alice30
//               .animate(aliceTumbling1, aliceTiming1)
//               .finished;
//     })
//     .catch((err) => alert(`Error when promising ... ${err.message}`));
// }
// else{
//   console.warn("#alice not found");
// }

async function animateAlice() {
  if (alice10 && alice20 && alice30) {
    try {
      await alice10.animate(aliceTumbling1, aliceTiming1).finished;
      await alice20.animate(aliceTumbling1, aliceTiming1).finished;
      await alice30.animate(aliceTumbling1, aliceTiming1).finished;
    } catch (err) {
      if (err instanceof Error) {
        alert(`Error when asyncing ... ${err.message}`);
      } else {
        alert('Unknown error occurred');
      }
    }
  } else {
    console.warn("#alice not found");
  }
}

animateAlice();