import React, { Component } from 'react';
import WOW from 'wowjs';
import Menu from '../Menu';
class PrivacyPolicy extends Component {
	state = {};
	componentDidMount() {
		new WOW.WOW({
			boxclassName: 'wow',
			animateclassName: 'animated',
			offset: 0,
			mobile: true,
			live: true,
		}).init();
	}

	render() {
		return (
			<div>
			  <Menu />
				<section className='privacyhero'>
					<div className='privacyhero__content'>
						<div
							className='privacyheroitem'
							style={{
								backgroundImage: 'url(./assets/images/banner_8@2x.png)',
							}}
						>
							<div className='container h-100'>
								<div className='privacyheroitem__content h-100'>
									<h1 className='privacyheroitem__title privacyheroitem__title--white wow text-focus-in'>
										Privacy Policy
									</h1>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className='privacypolicy'
					style={{ backgroundImage: 'url(./assets/images/doodle.svg);' }}
				>
					<div className='container'>
						<div className='privacypolicy__content'>
							<div className='privacypolicy__block'>
								<h3 className='privacypolicy__title'>Purpose and who we are</h3>
								<p
									className='privacypolicy__subtitle'
									style={{ marginBottom: '20px' }}
								>
									The purpose of this Privacy Notice is to describe how CLC
									Online Learning, Inc., our subsidiaries, and our international
									branches, ("CLC Online Learning," "us," "we," or "our")
									collects, uses, and shares information about you through our
									online interfaces (e.g., websites and mobile applications)
									owned and controlled by us, including but not limited to CLC
									Online Learning and rhyme.com (collectively referred to herein
									as the "Site"). Please read this Privacy Notice carefully to
									understand what we do. If you do not understand any aspects of
									our Privacy Notice, please feel free to contact us our
									website. Your use of our Site is also governed by our Terms
									used but not defined in this Privacy Notice can be found in
									our Terms of Use.
								</p>
							</div>
							<div className='privacypolicy__block'>
								<h3 className='privacypolicy__title'>
									What Information this Privacy Notice Covers
								</h3>
								<p
									className='privacypolicy__subtitle'
									style={{ marginBottom: '10px' }}
								>
									This Privacy Notice covers information we collect from you
									through our Site. Some of our Site’s functionality can be used
									without revealing any Personal Data, but for features or
									Services related to the Content Offerings, Personal Data is
									required. In order to access certain features and benefits on
									our Site, you may need to submit, or we may collect, "Personal
									Data" (i.e., information that can be used to identify you and
									which may also be referred to as “personally identifiable
									information” or “personal information”). Personal Data can
									include information such as your name, email address, IP
									address, and device identifier, among other things. You are
									responsible for ensuring the accuracy of the Personal Data you
									submit to CLC Online Learning. Inaccurate information may
									affect your ability to use the Site, the information you
									receive when using the Site, and our ability to contact you.
									For example, your email address should be kept current because
									that is one of the primary manners in which we communicate
									with you.
								</p>
							</div>
							<div className='privacypolicy__block'>
								<h3 className='privacypolicy__title'>
									What You Agree to by Using Our Site
								</h3>
								<p
									className='privacypolicy__subtitle'
									style={{ marginBottom: '20px' }}
								>
									We consider that the legal bases for using your personal
									information as set out in this Privacy Notice are as follows:
								</p>
								<ul
									className='privacypolicy__list'
									style={{
										fontSize: '14px',
										lineHeight: '19px',
										fontFamily: 'FuturaRegular',
										color: '#263844',
									}}
								>
									<li>
										our use of your personal information is necessary to perform
										our obligations under any contract with you (for example, to
										comply with the Terms of Use of our Site which you accept by
										browsing our website and/or to comply with our contract to
										provide Services to you, your academic institution, your
										employer, or other organization that may be providing you
										with access to our Services); or
									</li>
									<li>
										our use of your personal information is necessary for
										complying with our legal obligations; or
									</li>
									<li>
										use of your personal information is necessary for our
										legitimate interests or the legitimate interests of others.
										Our legitimate interests are to:
									</li>

									<ul className='privacypolicy__list ml-5'>
										<li>run, grow and develop our business;</li>
										<li>operate our Site and provide our Services;</li>
										<li>
											select appropriately skilled and qualified suppliers;
										</li>
										<li>
											build relationships with partners and academic
											institutions;
										</li>
										<li>carry out research and statistical analysis;</li>
										<li>carry out marketing and business development; and</li>
										<li>for internal administrative and auditing purposes.</li>
									</ul>

									<li>
										consent, to send you certain communications or where you
										submit certain information to us, or where required to rely
										upon consent by local law.
									</li>
								</ul>
								{/* </div> */}
								{/* <!--<div className="privacypolicy__block">--> */}

								<p
									className='privacypolicy__subtitle'
									style={{ marginBottom: '10px' }}
								>
									Which legal basis applies to a specific activity will depend
									on the type of personal information used and the context in
									which it is being used.
								</p>

								<p
									className='privacypolicy__subtitle'
									style={{ marginBottom: '10px' }}
								>
									If we rely on our (or another party’s) legitimate interests
									for using your personal information, we will undertake a
									balancing test to ensure that our (or the other party’s)
									legitimate interests are not outweighed by your interests or
									fundamental rights and freedoms which require protection of
									the personal information.
								</p>

								<p
									className='privacypolicy__subtitle'
									style={{ marginBottom: '10px' }}
								>
									We may process your personal information in some cases for
									marketing purposes on the basis of your consent (which you may
									withdraw at any time as described below).
								</p>

								<p
									className='privacypolicy__subtitle'
									style={{ marginBottom: '10px' }}
								>
									If we rely on your consent for us to use your personal
									information in a particular way, but you later change your
									mind, you may withdraw your consent by visiting your profile
									page and clicking the box to remove consent and we will stop
									doing so. If you withdraw your consent, this may impact the
									ability for us to provide some of our Services to you.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default PrivacyPolicy;