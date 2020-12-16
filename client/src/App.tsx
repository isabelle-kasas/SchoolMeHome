import React from 'react';
import Header from './components/header/header';
import GestionList from './components/gestionList/gestionList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewCalendarForm from './components/calendar/newCalendarForm';
import Calendar from './components/calendar/Calendar';
import './App.css';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        
        <main>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales sapien elit, eget convallis ante rhoncus ac. Pellentesque ipsum eros, mollis non volutpat vel, luctus ut enim. Aliquam iaculis volutpat mauris a tristique. Aliquam fermentum aliquet nulla, a iaculis metus ultrices ut. Ut sapien neque, placerat sed ullamcorper quis, porta quis erat. Nunc imperdiet nibh id massa semper dignissim gravida in augue. Nam ultricies risus quis nisl fermentum lacinia. Integer consectetur justo a nisi blandit, quis porta elit interdum. Cras ut velit ut velit porta maximus non vitae mauris. Maecenas sem metus, pharetra in efficitur sed, ultrices a lectus. Etiam id ante at nulla mattis sodales. Vivamus pretium nisl eget orci interdum ultricies. Cras lacus lorem, efficitur eget ullamcorper id, laoreet sit amet urna. Mauris quis dictum justo, at auctor elit.
</p><p>
Morbi imperdiet elit quis sem elementum tincidunt. Etiam viverra vulputate tortor tincidunt bibendum. In dolor enim, hendrerit in porttitor vitae, malesuada sed eros. Etiam eu dolor eu tortor porta malesuada. Vestibulum congue et metus sit amet varius. Sed quis arcu accumsan, vestibulum leo sed, fringilla nisl. Ut blandit fermentum dui nec dignissim. Mauris venenatis lacinia neque. Vestibulum sapien tortor, iaculis sit amet pharetra id, venenatis non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis accumsan sodales ex, et tristique justo feugiat ut. Morbi tincidunt risus ac purus commodo maximus.
</p><p>
Cras vel urna dolor. Sed ullamcorper non enim quis volutpat. Sed dictum lacinia purus, eget pellentesque ipsum ultrices dictum. Morbi finibus massa id ante semper semper. Sed nec faucibus dolor. Cras sodales dapibus turpis faucibus tristique. Aenean condimentum eu dolor congue volutpat. Etiam tincidunt, arcu eget tincidunt luctus, mauris erat dignissim enim, non accumsan dolor ex et velit.
</p><p>
Vestibulum at commodo erat, ultrices hendrerit diam. Nam cursus luctus lacus, at pharetra metus porttitor ut. Aenean vulputate nisi velit, vitae auctor massa commodo quis. Quisque mollis tellus fermentum aliquet pharetra. Aenean eget nulla risus. Donec at sem efficitur, elementum orci et, tristique eros. Duis ac ligula tortor. Aliquam convallis vulputate iaculis. In pellentesque sem diam, et suscipit lectus sodales non. Morbi vitae purus sed lectus gravida fermentum vel vitae dui. Sed at dignissim ex. Praesent convallis neque nec augue bibendum, sed pretium felis faucibus. Suspendisse augue augue, rhoncus quis ultricies quis, pharetra non dui. Nullam quis metus tristique, pellentesque metus nec, aliquam metus. Curabitur sed turpis mi.
</p><p>
Proin eros mauris, placerat sed porttitor eu, aliquam eget nisl. Ut porta dolor mi, nec suscipit tellus interdum at. Praesent bibendum metus at nunc dictum, sed venenatis purus malesuada. Maecenas ultrices diam aliquam mattis condimentum. Maecenas euismod volutpat neque sed porttitor. Etiam tincidunt in elit at viverra. Integer in mi ante. Aenean vulputate euismod ex, quis mollis tortor tempus at. Pellentesque non ante leo. Morbi erat neque, commodo id ante at, finibus cursus orci. Sed posuere lacinia tortor. In hac habitasse platea dictumst. Nunc eget turpis quis enim mattis blandit.
</p><p>
Donec consequat vel elit vel fringilla. Aenean sed massa bibendum, placerat nulla at, consequat nulla. Aenean non tincidunt leo. Sed fringilla cursus metus nec dignissim. Fusce fermentum turpis vitae ipsum tincidunt placerat. Quisque semper maximus lacus at rutrum. Phasellus dolor nisl, eleifend at aliquet et, suscipit eget dui. Proin venenatis lobortis nunc, vitae viverra urna venenatis in.
</p><p>
Vivamus eu nibh tempor, placerat odio quis, finibus orci. Aenean viverra rutrum bibendum. Phasellus blandit porttitor ante ac congue. Praesent lacinia vestibulum sem, vitae finibus mauris condimentum eu. Morbi lobortis tristique eleifend. Maecenas eu odio et sapien luctus volutpat. Aenean eu metus diam. Sed at imperdiet est. Morbi sodales dui tortor, at faucibus urna ultricies ut. Pellentesque rhoncus augue at dapibus tincidunt. Nam vitae tempus tellus.
</p><p>
Nunc vel sapien odio. Etiam libero lorem, gravida quis volutpat quis, placerat quis ante. Pellentesque facilisis, ligula non fermentum aliquet, felis orci mollis quam, pulvinar dapibus ligula lacus a sem. Proin convallis, erat vel scelerisque tincidunt, tellus lectus cursus nibh, quis blandit felis ante ac erat. Sed pretium sapien dignissim ex ullamcorper congue. Phasellus felis orci, ullamcorper a pretium rutrum, dictum a risus. Ut semper id diam ac luctus. Sed convallis eros mauris, ac volutpat sem placerat ullamcorper. Curabitur nec metus ipsum. Aliquam pellentesque, mi sed dignissim finibus, turpis nisi lacinia est, sit amet convallis nisi sapien eget nisi. Phasellus semper lectus metus, a semper eros dictum eu. Vivamus cursus nisl quis dignissim tincidunt. In nec sodales dolor. Etiam iaculis quam sit amet neque commodo, eu congue ante lobortis.
</p><p>
Proin velit odio, dignissim ac ultricies et, tincidunt non lacus. Aliquam ullamcorper nisi nisi, egestas laoreet lorem laoreet venenatis. Vivamus consectetur tellus tristique turpis dictum fermentum. Nam ultrices leo ex. Cras a elementum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut id vehicula enim. Praesent in felis eu nunc auctor finibus id vel orci. Sed non arcu et nisl suscipit tempor.
</p><p>
Maecenas ac neque et augue porttitor egestas. Nam non nisi fermentum, rutrum mauris faucibus, cursus magna. Suspendisse ac nisl nulla. Nam gravida risus quis felis interdum, quis tristique tellus egestas. Vestibulum quis iaculis sapien. Pellentesque pellentesque tortor tellus, malesuada imperdiet massa maximus eu. Duis suscipit tempor vestibulum. Praesent vulputate felis sed nulla porttitor efficitur. Donec ut quam facilisis, molestie justo ut, dignissim lacus. Donec lobortis interdum nibh. Fusce congue sagittis dictum. Suspendisse in commodo est. Integer risus sapien, condimentum sit amet blandit a, viverra vel enim.
      </p>  </main>
      </Router>
    </div>
  );
}

export default App;
