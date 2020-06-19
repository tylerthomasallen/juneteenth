import React from 'react';
import TimeAgo from "react-timeago";

const Home = () => {

  return (
    <div>
      <h1>Juneteenth</h1>
      <h3>
        History of Juneteenth (
        <a href="https://en.wikipedia.org/wiki/Juneteenth">Wikipedia</a>)
      </h3>
      <div>
        <span>
          Juneteenth is a non-federal American holiday and an
          official Texas state holiday, celebrated annually on the 19th
          of June in the United States to commemorate Union army general Gordon
          Granger announcing federal orders in the city of Galveston, Texas, on
          June 19, 1865, proclaiming that all slaves in Texas were now free. 
        </span>
      </div>

      <br />

      <div>
        <span>Time since slaves were freed in Texas on June 19th, 1865 (where the day gets it’s origin):</span> <TimeAgo date={new Date("1865/6/19")} />
      </div>

      <br />

      <div>
        <span>
          Although the Emancipation Proclamation had formally freed them almost
          two and a half years earlier and the American Civil War had largely
          ended with the defeat of the Confederate States in April, Texas was
          the most remote of the slave states, with a low presence of Union
          troops, so enforcement of the proclamation had been slow and
          inconsistent.
        </span>
      </div>

      <br />

      <div>
        <span>
          A common misconception is that this day marks the end of slavery in
          the United States. Although this day marks the emancipation of all
          slaves in the Confederacy, the institution of slavery was still legal
          and existed in the Union border states after June 19, 1865. Slavery in
          the United States did not officially end until the ratification of
          the Thirteenth Amendment to the Constitution of the United States on
          December 6, 1865, which abolished slavery entirely in all of the U.S.
          states and territories.
        </span>
      </div>
    </div>
  );

}

export default Home;
