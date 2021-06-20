var tabbedSection = {
	init: function () {
		this.mainCss();
		this.mainJS();
		this.goalJS();
	},
	mainCss: function () {
		var s = document.createElement('style');
		s.setAttribute('type', 'text/css');
		document.head.appendChild(s).textContent = '' +
			'.info-banner, ' +
			'.anchor-accordions, ' +
			'.usps, ' +
			'.section-spacing,' +
			'.quote-section,' +
			'.product-cover,' +
			'.policy-documents,' +
			'.faq-widget{' +
			'  display:none;' +
			'}' +
			'.tab-wrapper {\n' +
			'    background-color: #f3f3f3;\n' +
			'    padding: 40px 20px 20px 20px;\n' +
			'}' +
			'.tab-wrapper .tabs{' +
			'    padding-bottom: 45px !important;' +
			'}' +
			'.tab-wrapper .tabs:not(.no-popup) .tab-title a{' +
			'    padding: 10px 20px;' +
			'}' +
			'.tab-wrapper .tabs dd.active>a, .tabs .tab-title.active>a {\n' +
			'    background-color: #e70c2c;\n' +
			'    color: #fff;\n' +
			'}' +
			'.tab-wrapper .tabs:not(.no-popup) .tab-title.active::before{' +
			'    border-bottom-color: #e70c2c;' +
			'}' +
			'.tab-wrapper .tabs:not(.no-popup) .tab-title.active::after {' +
			'    border-color: #e70c2c;' +
			'}' +
			'.tab-container-wrapper .srt-1{' +
			'    font-size: 12px;\n' +
			'    padding: 0px;\n' +
			'    line-height:18px' +
			'}' +
			'.tab-container-wrapper .srt-2 {' +
			'     font-size: 10px;' +
			'     padding: 0px;' +
			'    line-height:15px' +
			'}' +
			'.test-grid-wrap li{' +
			'    height:200px;' +
			'}' +
			'.test-grid-wrap li div{ ' +
			'     background:#fff;' +
			'     margin:10px;' +
			'     height: calc(100% - 20px);' +
			'    display: flex;\n' +
			'    align-items: center;\n' +
			'    justify-content: center;' +
			' }' +
			'.test-grid-wrap li div img{ ' +
			'     height: 120px;' +
			'     width: auto;\n' +
			' }' +
			'.customAccordion .accordion-navigation.evo>a h2 {\n' +
			'    color: #000;\n' +
			'}' +
			'.tab-container-wrapper .accordion li{' +
			'    border-top: 1px solid #bababa;\n' +
			'}' +
			'.customAccordion .accordion-navigation.evo>a>div::after {\n' +
			'    color: #000;\n' +
			'}' +
            '.policy-doc-wrapper ul li{' +
            '   margin:16px 0px' +
            '}' +
            '.tab-modal .modal-body {\n' +
            '    padding: 20px;\n' +
            '}' +
			'@media only screen and (max-width: 40em){\n' +
			'	.tabs:not(.no-popup) .tab-title.active a {\n' +
			'   	background-color: #e70c2c;\n' +
			'	}' +
			'	.tabs:not(.no-popup) .tab-title a {' +
			'   	background-color: #e70c2c;\n' +
			'		color: #fff;' +
			'	}' +
			'}' +
			'.pt50{' +
			'	padding-top:50px;' +
			'}' +
			'.pb50{' +
			'	padding-bottom:50px;' +
			'}' +
			'.sbgc{' +
			'	background-color:#f3f3f3' +
			'}'
	},

	mainJS: function () {
		//For JS
		var $ = window.jQuery;

		$('<div class="tab-container-wrapper">' +
			'<div class="tab-wrapper"><ul class="tabs" data-tab role="tablist">\n' +
			'  <li class="tab-title active" role="presentation"><a href="#panel2-1" role="tab" tabindex="0" aria-selected="true" aria-controls="panel2-1">Why choose us</a></li>\n' +
			'  <li class="tab-title" role="presentation"><a href="#panel2-2" role="tab" tabindex="0" aria-selected="false" aria-controls="panel2-2">Who we cover</a></li>\n' +
			'  <li class="tab-title" role="presentation"><a href="#panel2-3" role="tab" tabindex="0" aria-selected="false" aria-controls="panel2-3">What we cover</a></li>\n' +
			'  <li class="tab-title" role="presentation"><a href="#panel2-4" role="tab" tabindex="0" aria-selected="false" aria-controls="panel2-4">Policy documents</a></li>\n' +
			'  <li class="tab-title" role="presentation"><a href="#panel2-5" role="tab" tabindex="0" aria-selected="false" aria-controls="panel2-5">Faqs</a></li>\n' +
			'</ul>\n' +
			'</div>' +
			'<div class="tabs-content">\n' +
			'  <section role="tabpanel" aria-hidden="false" class="content active" id="panel2-1">\n' +
			'    <div class="row pt50">\n' +
			'    	<h2>Why choose Direct Line for your business insurance?</h2>\n' +
			'    </div>' +
			'    <div class="row">\n' +
			'    <div class="small-12 columns">\n' +
			'      <ul class="tick">\n' +
			'        <li>Personalize Business Insurence' +
			'            <p class="srt-1"> Choose from a range of cover option to create a besopke policy for your business. </p>' +
			'        </li>\n' +
			'        <li>Unlimited Policy Change' +
			'             <p class="srt-1">There are no admin fees to pay if you need to make changes to your policy</p>' +
			'        </li>\n' +
			'        <li>Dedicated claim handler' +
			'          <p class="srt-1">If you need to make a claim, you\' have a dedicated person dealing with your case from start to finish.</p>' +
			'        </li>\n' +
			'        <li>0% APR ' +
			'               <p class="srt-1"> 0% APR on your monthly direct debit payments in the first year. </p>' +
			'               <p class="srt-2"> New customers only, over 18s, subject to eligibility.</p>' +
			'          </li>\n' +
			'        <li>Instant Proof of cover' +
			'               <p class="srt-1">Download your policy documents instantly to show proof of cover to clients.</p>' +
			'        </li>\n' +
			'        <li>10% off for existing customer' +
			'           <p class="srt-1">' +
			'             Get 10% off business insurence if you are already a Direct Line customer' +
			'           </p>' +
			'           <p class="srt-2"> Discount applies to your new business insurence policy. Subject to minimum premiums</p>' +
			'         </li>\n' +
			'        <li>24/7 legal servics' +
			'          <p class="srt-1"> Consult with a team of solicitors and legal experts whenever you need to with legal Essentials</p>' +
			'        </li>\n' +
			'      </ul>\n' +
			'    </div>\n' +
			'  </div>' +
			'  <div class="row pb50">\n' +
			'    <div class="small-12 columns">\n' +
			'      <div class="show-for-medium-up">\n' +
			'        <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" target="_blank" rel="noopener">Get a quote</a>\n' +
			'          <div id="DL4B-SB-middle-lpButtonDiv"></div>\n' +
			'        <span>or call us on <span class="boldest blue phone-disabled">0345 301 5066</span> </span>\n' +
			'      </div>\n' +
			'      <div class="show-for-small-only text-center">\n' +
			'        <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" target="_blank" rel="noopener">Get a quote</a>\n' +
			'        <a href="tel:+443453015066" class="button tertiary phone-disabled">call us on <span class="boldest">0345 301 5066</span></a>\n' +
			'      </div>\n' +
			'    </div>\n' +
			'  </div>' +
			'  </section>\n' +
			'  <section role="tabpanel" aria-hidden="true" class="content sbgc" id="panel2-2">\n' +
			'    <div class="row pt50">\n' +
			'    	<h2>Who We Cover</h2>\n' +
			'    	<p>We insure a wide-variety of businesses with very different insurance needs. That\'s why we let you choose what goes into your policy, so you only pay for the cover you need. </p>' +
			'    	<p>Click on the icons below to find out how you can create a bespoke policy for your business type.</p>' +
			'    	<p>If you don\'t one your business here it doesn\'t mean we wont cover you; start a quote online. speak to us on Live Chat on call us on 0345 8785 622 to see if we can offer you a quote. </p>' +
			'    	<ul class="test-grid-wrap small-block-grid-2 medium-block-grid-3 large-block-grid-4">\n' +
			'       	<li><div> <img src="https://i.imgur.com/F5f0y16.jpg" alt="hello"/> </div></li>\n' +
			'       	<li><div> <img src="https://i.imgur.com/F5f0y16.jpg" alt="hello"/> </div></li>\n' +
			'       	<li><div> <img src="https://i.imgur.com/F5f0y16.jpg" alt="hello"/> </div></li>\n' +
			'       	<li><div> <img src="https://i.imgur.com/F5f0y16.jpg" alt="hello"/> </div></li>\n' +
			'       	<li><div> <img src="https://i.imgur.com/F5f0y16.jpg" alt="hello"/> </div></li>\n' +
			'       	<li><div> <img src="https://i.imgur.com/F5f0y16.jpg" alt="hello"/> </div></li>\n' +
			'       	<li><div> <img src="https://i.imgur.com/F5f0y16.jpg" alt="hello"/> </div></li>\n' +
			'       	<li><div> <img src="https://i.imgur.com/F5f0y16.jpg" alt="hello"/> </div></li>\n' +
			'     	</ul>' +
			' 	</div>' +
			'       <div class="row pb50">\n' +
			'           <div class="small-12 columns">\n' +
			'               <div class="show-for-medium-up">\n' +
			'                   <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" target="_blank" rel="noopener">Get a quote</a>\n' +
			'                   <div id="DL4B-SB-middle-lpButtonDiv"></div>\n' +
			'                        <span>or call us on <span class="boldest blue phone-disabled">0345 301 5066</span> </span>\n' +
			'                </div>\n' +
			'           <div class="show-for-small-only text-center">\n' +
			'               <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" target="_blank" rel="noopener">Get a quote</a>\n' +
			'               <a href="tel:+443453015066" class="button tertiary phone-disabled">call us on <span class="boldest">0345 301 5066</span></a>\n' +
			'           </div>\n' +
			'           </div>\n' +
			'       </div>' +
			'  </section>\n' +
			'  <section role="tabpanel" aria-hidden="true" class="content" id="panel2-3">\n' +
			'    <div class="row pt50">\n' +
			'    	<h2>What we cover</h2>\n' +
			'    	<p>Add any of the following cover options to your Small Business poky and create commercial insurance that fits your business needs. These covers are subject to policy cond.,. atirssimiss \n</p>' +
			' 	</div>' +
			'    <div class="row small-collapse medium-uncollapse push-down-40">\n' +
			'    <div class="small-12 columns">\n' +
			'      <ul class="accordion customAccordion" data-accordion="">\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="publicLiability2">\n' +
			'            <a href="#public-liability2" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Public and product liability</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="public-liability2" class="content">\n' +
			'               <p><a href="/public-liability-insurance" class="underline" title="Public Liability Insurance - Direct Line for Business">Public liability</a> insurance covers you if you cause injury to a member of the public or accidentally damage someone’s property. An example of this could include a customer slipping on a wet floor in your shop or office and hurting themselves, or you causing damage while carrying out building works on a client\'s house.</p>\n' +
			'               <p>This insurance also covers you if a customer or member of the public becomes ill or suffers an injury as a result of a product you have supplied. For example, if the heel snaps off a shoe someone has bought from you, causing them to fall over, or if a cupcake you sell at an event makes someone sick.</p>\n' +
			'               <p>If the people in question pursued legal action against you, public and product liability insurance would cover the costs you are liable to pay. We can offer cover from £1 million to £10 million.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="professionalIndemnity2">\n' +
			'            <a href="#professional-indemnity2" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Professional indemnity</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="professional-indemnity2" class="content">\n' +
			'               <p><a href="/professional-indemnity-insurance" class="underline" title="Professional Indemnity Insurance - Direct Line for Business">Professional indemnity</a> is useful if your business offers a service or requires you to give advice to clients. If you make a professional error or give advice that is deemed negligent, you could be taken to court.</p>\n' +
			'               <p>Professional indemnity insurance covers any legal and compensation costs you are required to pay. Clients will often ask to see proof of professional indemnity insurance before agreeing to work with a new contractor.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="employersLiability">\n' +
			'            <a href="#employers-liability" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Employers\' liability</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="employers-liability" class="content">\n' +
			'               <p>Employers\' liability insurance is a legal requirement if you have employees. There are a couple of exceptions to this rule, which you can read more about <a href="/small-business-insurance/employers-liability-insurance" class="underline" title="Employers Liability Insurance - Direct Line for Business">here.</a></p>\n' +
			'               <p>We cover you for £10 million, as standard. This covers the legal and compensation costs you are required to pay if an employee gets injured or becomes ill because of the work they do for you.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="buildingsCover">\n' +
			'            <a href="#buildings-cover" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Buildings cover</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="buildings-cover" class="content">\n' +
			'               <p>If there is an insured event such as flood or fire at your work premises, buildings insurance will cover the costs of repairing the damage, helping you get back up and running.</p>\n' +
			'               <p>Equipment breakdown cover (for items forming part of the building) is included as standard. This would cover the costs of replacing or repairing things like your broken boiler and fire/burglar alarms, as long as the damage is not due to wear and tear.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="contentsAndStock">\n' +
			'            <a href="#contents-and-stock" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Contents and stock</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="contents-and-stock" class="content">\n' +
			'               <p><a href="/small-business-insurance/contents-insurance" class="underline" title="Contents Insurance - Direct Line for Business">Contents and stock cover</a> is essential for businesses that supply goods or rely on specific equipment to run their business.</p>\n' +
			'               <p>A seamstress would not be able to work without a sewing machine, a web designer would not be able to code without a computer and you may not be able to run your business without your trusty tablet.</p>\n' +
			'               <p>Meanwhile, there will be other more general items that you might rely on for your business, like your office furniture or your shop tills. Insure your business contents so that if they\'re damaged by an insured event, such as fire or theft, your business keeps going.</p>\n' +
			'               <p>If you sell goods, you\'ll want to insure your stock, whether that\'s raw materials or the finished article. If your goods are damaged or stolen, what have you got to sell?</p>\n' +
			'               <p>Our different cover options allow you to insure your business equipment and stock at your premises, when you\'re on the move, or both. Whether you work at home, at fairs, in shared workspaces or visit a lot of clients, we\'ve got you covered. And when you insure stock at your premises or home, you\'ll also get an extra 25% of stock covered for two months of your choice as standard, ideal for your busiest periods.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="businessInterruption">\n' +
			'            <a href="#business-interruption" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Business interruption</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="business-interruption" class="content">\n' +
			'               <p>Depending on the type of business you run, you might work from home, in an office, at your shop, a client’s premises or a shared working space. If your working premises became unusable due to an insured event like a fire or flood, <a href="/small-business-insurance/business-interruption-insurance" class="underline" title="Business interruption insurance - Direct Line for Business">business interruption</a> will cover the costs of relocating until it’s fixed. It can also cover you for any lost turnover during this time if you’ve insured your premises or business property with us.</p>\n' +
			'               <p>If your main supplier or customer suffers damage to their premises and can’t trade, we’ll cover you for the loss of business you’ll suffer. Equally, if a market or fair that you regularly attend suffers a fire, we’ll cover the lost turnover for the time you can’t trade there. Business interruption will also cover you if key equipment that you use to run your business, like a laptop, is damaged or stolen, meaning you can’t trade.</p>\n' +
			'               <p>Our business interruption cover can insure you if you or one of your key employees becomes seriously disabled and is unable to continue work. We will cover the incurred costs, up to £25,000, to minimise any interruption to the business.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="theftOfTakings">\n' +
			'            <a href="#theft-of-takings" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Theft of takings</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="theft-of-takings" class="content">\n' +
			'               <p><a href="/small-business-insurance/theft-of-takings" title="Loss of money Insurance | Theft of takings | Direct Line for Business">Theft of Takings </a>covers cash or cheques stolen from you in transit, from a safe or on you while you\'re working at other premises, such as your clients\' homes. Maximum limits apply.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="cyberCover">\n' +
			'            <a href="#cyber-cover" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Cyber cover</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="cyber-cover" class="content">\n' +
			'               <p>If you hold sensitive customer data, process payments online or just want peace of mind, <a href="/small-business-insurance/cyber-insurance" class="underline" title="Cyber insurance - Direct Line for Business">Cyber cover</a> should be\n' +
			'                  considered. Because cyber criminals can be clever. Catching you off-guard and tricking you in to doing something you\n' +
			'                  shouldn\'t, like opening an attachment in a fake email, or finding a way through your cyber-security. If this happens and\n' +
			'                  they get their hands on your data or access to your bank account, the impact on your business could be devastating.\n' +
			'               </p>\n' +
			'               <p>But, with our Cyber cover, you can call the experts, 24/7. They\'ll be on it, helping you to stay in business and recover\n' +
			'                  in three ways:\n' +
			'               </p>\n' +
			'               <h4>Recover financially</h4>\n' +
			'               <ul class="dots">\n' +
			'                  <li>Covering loss of business income if your systems are attacked</li>\n' +
			'                  <li>Covering recovery costs, like fixing damage to your computer systems or data restoration</li>\n' +
			'                  <li>Covering fines (where insurable by law) and compensation costs.</li>\n' +
			'               </ul>\n' +
			'               <h4>Recover your reputation</h4>\n' +
			'               <ul class="dots">\n' +
			'                  <li>You get access to public relations and crisis management experts to minimise damage to your brand and business.</li>\n' +
			'               </ul>\n' +
			'               <h4>Recover your systems and help prevent future incidents</h4>\n' +
			'               <ul class="dots">\n' +
			'                  <li>Technical experts will help fix your IT issues and provide advice on how to prevent future cyber incidents.</li>\n' +
			'               </ul>\n' +
			'               <p class="regular">Read more on Cyber cover <a href="/small-business-insurance/cyber-insurance" class="underline" title="Cyber insurance - Direct Line for Business">here</a>.</p>\n' +
			'               <p>Available on new and renewal policies only. For Retail and Office &amp; Professional customers only.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="legalExpenses">\n' +
			'            <a href="#legal-expenses" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Legal expenses</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="legal-expenses" class="content">\n' +
			'               <p>Pays the legal costs of providing specialist lawyers and taking action against many common legal problems, for instance disputes with suppliers or clients.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="toolsAndBusinessEquipment">\n' +
			'            <a href="#tools-and-business-equipment" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Tools and business equipment</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="tools-and-business-equipment" class="content">\n' +
			'               <p>We know how important tools and equipment are for tradespeople. So, when it comes to tools insurance, we\'ve nailed it.</p>\n' +
			'               <p>And now, you\'ll get a fast-upfront payment of up to £1,500 (after a few checks) to help you replace your essential tools or business equipment if they\'re stolen or damaged, with Tools Essentials.</p>\n' +
			'               <h3>Tools and Business Equipment cover</h3>\n' +
			'               <p>With this you\'re covered if they\'re damaged or stolen from:</p>\n' +
			'               <ul class="dots">\n' +
			'                  <li class="underline">your vehicle during the day if the vehicle is securely locked</li>\n' +
			'                  <li>a locked building, like your garage or home, anytime of day or night.</li>\n' +
			'               </ul>\n' +
			'               <p class="disclaimer">Policy limits and excesses apply.</p>\n' +
			'               <h3>With the Overnight Tools optional add-on (for an extra premium)</h3>\n' +
			'               <p>You\'re covered for theft of tools when they\'re locked in your vehicle overnight that\'s parked on your drive, the street or if you\'re working away.</p>\n' +
			'               <p class="disclaimer">Available on new policies only. Tools removed when the vehicle is not being used for business purposes for more than five consecutive days. Cover excludes electrical items such as laptops, cameras, mobile phones, removable satellite navigation systems, and handheld survey equipment. Cover limits and variable claim excesses apply.</p>\n' +
			'               <h3>And you get Tools Essentials with both</h3>\n' +
			'               <p>To help you replace your essential tools or equipment quickly, if they\'re stolen or damaged, so you can get back to work. You contact us as soon as you can between 8am and 6pm, Monday to Friday (excluding Bank Holiday) and after a few checks, we transfer up to £1,500 to you, within 24 hours.</p>\n' +
			'               <p class="disclaimer">Claims and policy limits apply. Crime reference or proof of damage and proof of ownership needed.</p>\n' +
			'               <h3>What we cover</h3>\n' +
			'               <p>We cover power tools such as drills, hammers, screwdrivers, chisels, spanners, saws, pliers, trowels and blow torches.  And equipment like ladders, steps, cleaning supplies, lawnmowers, paint trays, brushes, workbenches and spirit levels. </p>\n' +
			'               <a class="underline regular" href="/public-liability-insurance/insurance-for-tools" title="Tools Insurance 10% off online | Direct Line for Business">Read more about Tools and Business Equipment, Overnight Tools and Tools Essentials.</a>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="ownPlant">\n' +
			'            <a href="#own-plant" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Own plant</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="own-plant" class="content">\n' +
			'               <p>Own plant covers larger items of machinery owned by the business, such as cement mixers, diggers, mini-diggers, dumpers, excavators, generators, trailers and temporary site huts and caravans. This does not include regular items in your toolkit, like a hammer.</p>\n' +
			'               <p>We can cover this machinery for theft and damage due to an insured event e.g. fire. We do not cover machinery that has been damaged due to wear and tear.</p>\n' +
			'               <p class="bold">Cover limits:</p>\n' +
			'               <ul class="dots">\n' +
			'                  <li>Up to 5 workers – £75,000</li>\n' +
			'                  <li>Up to 10 workers – £100,000</li>\n' +
			'                  <li>Up to 15 workers – £100,000</li>\n' +
			'               </ul>\n' +
			'               <p>There is a single article limit of £50,000.</p>\n' +
			'               <p><span class="bold">Excess per claim</span> - £250</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="hiredInPlant">\n' +
			'            <a href="#hired-in-plant" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Hired in plant</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="hired-in-plant" class="content">\n' +
			'               <p>Hired in plant refers to machinery that you have hired from a third party, either for a short period of time or on permanent hire. The types of machinery we cover include: cement mixers, diggers, mini-diggers, dumpers, excavators, generators, trailers and temporary site huts and caravans.</p>\n' +
			'               <p>If something happens to the machinery while it is on hire and being used by your business, and the incident is covered by an insured event, e.g. a fire or theft, we can cover the cost of replacing it.</p>\n' +
			'               <p class="bold">Cover limits:</p>\n' +
			'               <ul class="dots">\n' +
			'                  <li>Up to 5 workers – £75,000</li>\n' +
			'                  <li>Up to 10 workers – £100,000</li>\n' +
			'                  <li>Up to 15 workers – £100,000</li>\n' +
			'               </ul>\n' +
			'               <p>There is a single article limit of £50,000.</p>\n' +
			'               <p><span class="bold">Excess per claim</span> - £250</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="contractWorks">\n' +
			'            <a href="#contract-works" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Contract works</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="contract-works" class="content">\n' +
			'               <p>This covers work that is in progress that is damaged by an insured event, such as a fire, flood, vandalism or theft. We can cover the costs required to repair or redo the work.</p>\n' +
			'               <p>For example, if you\'re a builder working on a house and a fire destroys part of the house five months into a six-month contract, we can help you to complete the contract by:</p>\n' +
			'               <ul class="dots">\n' +
			'                  <li>covering the costs required to purchase the materials needed to finish the job</li>\n' +
			'                  <li>covering the costs required to rebuild the parts destroyed by fire</li>\n' +
			'                  <li>covering any labour costs to repair the damage</li>\n' +
			'               </ul>\n' +
			'               <p class="bold">Cover limits:</p>\n' +
			'               <p>Contract value (based on the maximum value for any one contract anywhere within the UK)</p>\n' +
			'               <ul class="dots">\n' +
			'                  <li>Up to 5 workers – £750,000</li>\n' +
			'                  <li>Up to 10 workers – £1,000,000</li>\n' +
			'                  <li>Up to 15 workers – £1,000,000</li>\n' +
			'               </ul>\n' +
			'               <p>Turnover limit - £1,500,000</p>\n' +
			'               <p><span class="bold">Excess per claim</span> - £500</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'         <li class="accordion-navigation evo accordion-custom" id="personalAccident">\n' +
			'            <a href="#personal-accident" aria-expanded="false">\n' +
			'               <div>\n' +
			'                  <h2>Personal accident</h2>\n' +
			'               </div>\n' +
			'            </a>\n' +
			'            <div id="personal-accident" class="content">\n' +
			'               <p>Personal accident cover provides payment if anyone in your business between the ages 16-75 is unable to work because\n' +
			'                  they\'ve been injured in an accident, whether in a business or personal capacity.\n' +
			'               </p>\n' +
			'               <p>We\'ll pay a lump sum of £50,000 if there is an accidental death, accidental loss of limbs or sight, or if someone in\n' +
			'                  your business becomes permanently disabled following an accident.\n' +
			'               </p>\n' +
			'               <p>If someone in your business is unable to work due to a temporary injury, then after 7 days we\'ll pay their normal net\n' +
			'                  weekly earnings up to £500 for up to 104 weeks.\n' +
			'               </p>\n' +
			'               <p>You can choose Personal Accident as an add-on once you\'ve completed your quote.</p>\n' +
			'            </div>\n' +
			'         </li>\n' +
			'      </ul>\n' +
			'   </div>\n' +
			'</div>' +
			'    <div class="row push-down-40 mobile-push-down-30 pb50">\n' +
			'        <div class="large-12 columns">\n' +
			'            <p>We also offer terrorism cover. If you would like more information about this cover type, or would like to take out this cover, please call us on 0345 301 5066.</p>\n' +
			'        </div>\n' +
			'    </div>' +
			'  </section>\n' +
			'  <section role="tabpanel" aria-hidden="true" class="content policy-doc-wrapper" id="panel2-4">\n' +
			'  <div class="row pt50">\n' +
			'    <div class="small-12 columns">\n' +
			'      <h2 class="h1 red">Policy documents</h2>\n' +
			'      <p class="regular">If you have an existing quote or policy with us, you can view and download your policy documents from the <a href="/my-account" class="underline" title="My Account - Direct Line for Business">My Account</a> page.</p>\n' +
			'      <p class="regular">We tailor all our policies, so your documents only show what you’ve chosen to cover.</p>\n' +
			'      <p class="regular">Below is a summary of a generic policy, from 25 October 2020 onwards, which shows the main covers and exclusions in our policies.</p>\n' +
			'      <ul>\n' +
			'        <li><a class="pdf" target="_blank" href="/lib/pdf/Static_Policy_summary_OP_with_PI-ldn.pdf">Office policy summary (PDF)</a></li>\n' +
			'        <li><a class="pdf" target="_blank" href="/lib/pdf/Static_Policy_summary_R_with_PI-ldn.pdf">Retail policy summary (PDF)</a></li>\n' +
			'        <li><a class="pdf" target="_blank" href="/lib/pdf/tradesman-insurance-policy-kfn.pdf">Tradesman policy summary (PDF)</a></li>\n' +
			'        <li><a class="pdf" target="_blank" href="/lib/pdf/landlord-insurance-policy-summary-lec.pdf">Landlord policy summary (PDF)</a></li>\n' +
			'        <li><a class="pdf" target="_blank" href="/lib/pdf/Static_Policy_summary_BB-ldn.pdf">Bed &amp; Breakfast / Guest Houses Insurance policy summary (PDF)</a></li>\n' +
			'        <li><a class="pdf" target="_blank" href="/lib/pdf/Static_Policy_summary_HB-ldn.pdf">Hair and Beauty insurance policy summary (PDF)</a></li>\n' +
			'      </ul>\n' +
			'    </div>\n' +
			'  </div>' +
			'  <div class="row pb50">\n' +
			'    <div class="small-12 columns">\n' +
			'      <div class="show-for-medium-up">\n' +
			'        <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" target="_blank" rel="noopener">Get a quote</a>\n' +
			'          <div id="DL4B-SB-middle-lpButtonDiv"></div>\n' +
			'        <span>or call us on <span class="boldest blue phone-disabled">0345 301 5066</span> </span>\n' +
			'      </div>\n' +
			'      <div class="show-for-small-only text-center">\n' +
			'        <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" target="_blank" rel="noopener">Get a quote</a>\n' +
			'        <a href="tel:+443453015066" class="button tertiary phone-disabled">call us on <span class="boldest">0345 301 5066</span></a>\n' +
			'      </div>\n' +
			'    </div>\n' +
			'  </div>' +
			'  </section>\n' +
			'  <section role="tabpanel" aria-hidden="true" class="content" id="panel2-5">\n' +
			'   <div class="row column pt50">\n' +
			'    <h2 class="h1">Frequently asked questions</h2>\n' +
			'  </div>\n' +
			'<div class="row">\n' +
			'    <div class="small-12 columns">\n' +
			'      <ul class="accordion" data-accordion="">\n' +
			'        <li class="accordion-navigation">\n' +
			'          <a href="#what-business-insurance-do-i-need" aria-expanded="false">\n' +
			'  <h3 class="no-padding sub-heading">What business insurance do I need?</h3>\n' +
			'</a>\n' +
			'<div id="what-business-insurance-do-i-need" class="content">\n' +
			'\t<p>Different businesses require different types of insurance, that\'s why we let you pick and choose the covers that go into your policy. So, whether you\'re a <a href="/small-business-insurance/shop-insurance" title="Shop and Retail Insurance Quotes - Direct Line for Business" class="underline">retailer</a> or a <a href="/small-business-insurance/dog-grooming" title="Dog Grooming Insurance - Direct Line for Business" class="underline">dog groomer</a>, an <a href="/small-business-insurance/it-consultants" title="IT Consultant and Services Insurance - Direct Line for Business" class="underline">IT consultant</a> or a <a href="/small-business-insurance/photographers" title="Photography Insurance Quotes - Direct Line for Business" class="underline">photographer</a>, you can choose the cover that\'s just right for your business.</p>\n' +
			'\t<p>You can include any of the following cover types in your small business insurance policy:</p>\n' +
			'\t<ul class="dots">\n' +
			'\t\t<li><a href="/public-liability-insurance" class="underline" title="Public Liability Insurance - Direct Line for Business">Public liability insurance</a></li>\n' +
			'\t\t<li><a href="/small-business-insurance/product-liability-insurance" class="underline" title="Product Liability Insurance - Direct Line for Business">Product liability insurance</a></li>\n' +
			'\t\t<li><a href="/professional-indemnity-insurance" class="underline" title="Professional indemnity insurance - Direct Line for Business">Professional indemnity insurance</a></li>\n' +
			'\t\t<li><a href="/small-business-insurance/employers-liability-insurance" class="underline" title="Employers\' liability insurance - Direct Line for Business">Employers\' liability insurance</a></li>\n' +
			'\t\t<li><a href="/small-business-insurance/buildings-insurance" class="underline" title="Business Buildings Insurance - Direct Line for Business">Buildings cover</a></li>\n' +
			'\t\t<li><a href="/small-business-insurance/contents-insurance" class="underline" title="Contents insurance - Direct Line for Business">Contents and stock cover</a></li>\n' +
			'\t\t<li><a href="/small-business-insurance/theft-of-takings" class="underline" title="Loss of money Insurance - Theft of takings - Direct Line for Business">Theft of takings</a></li>\n' +
			'\t\t<li><a href="/small-business-insurance/business-interruption-insurance" class="underline" title="Business interruption insurance - Direct Line for Business">Business interruption</a></li>\n' +
			'\t\t<li><a href="/small-business-insurance/cyber-insurance" class="underline" title="Cyber insurance - Direct Line for Business">Cyber insurance</a></li>\n' +
			'\t\t<li>Legal expenses</li>\n' +
			'\t</ul>\n' +
			'</div>\n' +
			'\n' +
			'        </li>\n' +
			'        <li class="accordion-navigation">\n' +
			'          <a href="#how-much-does-it-cost-to-insure-a-small-business" aria-expanded="false">\n' +
			'  <h3 class="no-padding sub-heading">How much does it cost to insure a small business?</h3>\n' +
			'</a>\n' +
			'<div id="how-much-does-it-cost-to-insure-a-small-business" class="content">\n' +
			'  <p>Different businesses will need different levels of cover, so the cost of insuring a business will differ. We let you design your own Small Business Insurance, so you\'re in control of what aspects of your business you insure and how much you pay.</p>\n' +
			'  <p>The cost of your business insurance quotes will be affected by: the size of your business, number of employees, type of trade and your history of insurance claims.</p>\n' +
			'</div>\n' +
			'\n' +
			'        </li>\n' +
			'        <li class="accordion-navigation">\n' +
			'          <a href="#is-business-insurance-required-by-law" aria-expanded="false">\n' +
			'  <h3 class="no-padding sub-heading">Is business insurance required by law?</h3>\n' +
			'</a>\n' +
			'<div id="is-business-insurance-required-by-law" class="content">\n' +
			'  <p>In most cases, business insurance is optional, but some clients and companies may require proof of insurance before agreeing to work with you.</p>\n' +
			'  <p>Event organisers, for example, may need to see proof of public liability insurance before letting you trade at their craft fair. A business professional may require you to show proof of professional indemnity insurance before hiring you as a consultant.</p>\n' +
			'  <p>If you hire employees, you are legally required to take out at least £5 million in employers\' liability insurance. To understand your legal responsibilities and what the exceptions are, read more about employers\' liability <a href="/small-business-insurance/employers-liability-insurance" title="Employers Liability Insurance Quotes | Direct Line for Business">here</a>.</p>\n' +
			'</div>\n' +
			'        </li>\n' +
			'        <li class="accordion-navigation">\n' +
			'          <a href="#what-are-the-different-types-of-micro-business" aria-expanded="false">\n' +
			'  <h3 class="no-padding sub-heading">What are the different types of micro business?</h3>\n' +
			'</a>\n' +
			'<div id="what-are-the-different-types-of-micro-business" class="content">\n' +
			'  <p>A micro business is defined as an enterprise that employs nine people or fewer. As of 2017, micro businesses count for 96% of the UK\'s business landscape and, as you might expect, there are many different types of micro business.</p>\n' +
			'</div>\n' +
			'\n' +
			'        </li>\n' +
			'        <li class="accordion-navigation">\n' +
			'          <a href="#what-if-my-trade-is-not-mentioned-on-the-online-quote-tool" aria-expanded="false">\n' +
			'  <h3 class="no-padding sub-heading">What if my trade is not mentioned on the online quote tool?</h3>\n' +
			'</a>\n' +
			'<div id="what-if-my-trade-is-not-mentioned-on-the-online-quote-tool" class="content">\n' +
			'  <p>If you can\'t find your trade using our online tool then you can chat to us online or call us on 0345 301 5066 and we\'ll see if we can provide cover for your trade.</p>\n' +
			'</div>\n' +
			'        </li>\n' +
			'        <li class="accordion-navigation">\n' +
			'          <a href="#what-do-i-do-if-i-have-multiple-trades" aria-expanded="false">\n' +
			'   <h3 class="no-padding sub-heading">What do I do if I have multiple trades?</h3>\n' +
			'</a>\n' +
			'<div id="what-do-i-do-if-i-have-multiple-trades" class="content">\n' +
			'  <p>Our online quote tool gives you the option to enter all your trades so that we have a clear idea of what type of cover you might need. It\'s important that we know everything that you do.</p>\n' +
			'  <p>If you don\'t include something you do as a trade, then we might not be able to cover any claims. You have a duty to make a fair presentation of your business at all times, so if you are in any doubt about what information or changes you need to disclose then chat to us online or call us on 0345 301 5066.</p>\n' +
			'</div>\n' +
			'        </li>\n' +
			'        <li class="accordion-navigation">\n' +
			'          <a href="#how-long-is-a-quote-valid-for-sbi" aria-expanded="false">\n' +
			'    <h3 class="no-padding sub-heading">How long is a business insurance quote valid for?</h3>\n' +
			'</a>\n' +
			'<div id="how-long-is-a-quote-valid-for-sbi" class="content">\n' +
			'    <p>Your quote is valid for up to 30 days from the day you receive it.</p>\n' +
			'</div>\n' +
			'        </li>\n' +
			'      </ul>\n' +
			'      <div>\n' +
			'        <!-- <a href="/small-business-insurance/bed-and-breakfast-guesthouse-insurance/faqs" class="button secondary no-margin-bottom" title="Frequently asked questions about Bed & Breakfast and Guest House Insurance - Direct Line for Business">View more questions</a> -->\n' +
			'      </div>\n' +
			'    </div>\n' +
			'  </div>' +
			'  <div class="row pb50">\n' +
			'    <div class="small-12 columns">\n' +
			'      <div class="show-for-medium-up">\n' +
			'        <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" target="_blank" rel="noopener">Get a quote</a>\n' +
			'          <div id="DL4B-SB-middle-lpButtonDiv"></div>\n' +
			'        <span>or call us on <span class="boldest blue phone-disabled">0345 301 5066</span> </span>\n' +
			'      </div>\n' +
			'      <div class="show-for-small-only text-center">\n' +
			'        <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" target="_blank" rel="noopener">Get a quote</a>\n' +
			'        <a href="tel:+443453015066" class="button tertiary phone-disabled">call us on <span class="boldest">0345 301 5066</span></a>\n' +
			'      </div>\n' +
			'    </div>\n' +
			'  </div>' +
			'  </section>\n' +
			'</div> </div>').insertBefore(".info-banner");

		$(document).foundation();
		$(document).foundation('tab', 'reflow');

	},
	goalJS: function () {
		//For JS
	}
};

(function pollFor() {
	if (document.querySelector('body') && window.jQuery !== undefined) {
		tabbedSection.init();
	} else {
		setTimeout(pollFor, 25);
	}
})();