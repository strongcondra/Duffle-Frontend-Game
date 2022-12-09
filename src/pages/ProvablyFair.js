import './css/ToS.scss';
import './css/ProvablyFair.scss';

import { useEffect } from 'react';

//Component Imports
import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default function ProvablyFair() {

    useEffect(() => {
		//Using CodeMirror external library for code window.
        document.querySelector(".provably-fair-code-container").innerHTML = "";
        window.CodeMirror(document.querySelector(".provably-fair-code-container"), {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'monokai',
            value: `function randomize() {\n\t//Source code for randomizing algorithm\n}` //This will be replaced with actual code
        });
    }, []);

	return (
		<div>
			<Background />
			<Header title="Provably Fair"/>
			<Navigation />

			<main className="provably-fair tos">
            <div className="container-fluid max-width-1920">
					<div className="row">
						<div className="col-12 col-lg-8 text-container">
							<h4>Provably Fair</h4>
                            <p>Here you can verify all games. Our results are always random. Our system is designed so that nobody can know the outcome before the round has ended. Games are determined by two randomly generated seeds that when combined, decide the outcome of the game.</p>
                            <p>We have no control over what the result will be, our system will always be provably fair.</p>
                            <p>You are able to verify each round by inputting the round outcome and the round secret given below. From this, it will give the matching hash from that round, ensuring that the round was randomly generated and fair. Try it for yourself! Use this</p>

                            <div className="provably-fair-code-container"></div>
						</div>
						<div className="col-12 col-lg-4 logo-container"></div>
					</div>
				</div>
			</main>
		</div>
	);
}
