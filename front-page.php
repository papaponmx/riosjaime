
<?php get_header(); ?>

<header>
    <div class="header-content">
        <div class="header-content-inner">
            <h1>WEB DESIGNER / FRONT-END DEVELOPER / UX DESIGNER</h1>
            <hr>
            <h2>Hello, I'm Jaime. Specializing in web design, front-end development and digital media.</h2>
            <h2><a href="#about" class="btn btn-primary page-scroll">See more</a></h2>  <h2><a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal" data-toggle="tooltip" data-placement="left" title="I do read everything!" id="contact-btn">
                Contact me </a></h2>
        </div>
    </div>
</header>


<!--This is a loop that allows me to replace the container above and set it up dinamicly with WP

     <header>
         <div class="header-content">
             <div class="header-content-inner">

                <?php // if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                  <?php //the_content(); ?>


                 <?php // endwhile; endif; ?>
            </div>
         </div>
     </header>


 HERE  ENDS THE FIRST LOOP -->

<!--Here comes the awesome grid this should loop trough the posts, creating a 3 columns grid-->

<div class="row"> <!--This row loops trhought the portfolio elements-->
  <div class= "col-xs-12 portfolio-header text-center">
    <h2>Here is some of my recent work</h2>

  </div>

  <?php
    $args = array (
    'post_type' => 'portfolio'
  );
  $the_query = new WP_Query ( $args );
   ?>

    <?php if ( have_posts() ): while ( $the_query->have_posts() ) : $the_query->the_post();?>

   <div class="col-xs-3 portfolio-piece text-center">

     <?php
       $thumbnail_id = get_post_thumbnail_id();
       $thumbnail_url = wp_get_attachment_image_src( $thumbnail_id, 150, true );
     ?>

     <p><a href="<?php the_permalink(); ?>"><img src="<?php echo $thumbnail_url[0]; ?>" alt="<?php the_title();?> graphic"></a></p>
     <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>

 </div>

 <?php $portfolio_count = $the_query->current_post + 1; ?>
 <?php if ( $portfolio_count % 4 == 0): ?>

 </div><div class="row">

 <?php endif; ?>


 <?php endwhile; endif; ?>



</div>









<!-- This is the button with the contact form -->
  <div class="container grid-div">


  </div>



<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Contact me</h4>
      </div>
      <div class="modal-body">

        <?php
          if( function_exists( 'ninja_forms_display_form' ) ){ ninja_forms_display_form( 1 ); }
        ?>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!--Ends MODAL -->


<div class="row fourth-row about-div">      <!--STARTS FOURTH ROW-->
<div class="col-sm-6 grid-div hidden-xs"  id="french">
 <h3>OUI <br>Je parle Francais </h3>
</div>
<div class="col-sm-6 grid-div hidden-xs" id="spanish">
  <h3 >Sí<br>Yo hablo español </h3>
</div>
</div>

<div class="row">
<div class="col-sm-12s text-square text-justify grid-div" id="about-div">

   <img class="grid-img nested-grid-img   img-circle text-right" src="<?php echo get_template_directory_uri(); ?>/img/profile2.jpg" alt="This is my profile picture" id="smile">
     <h2 class="title" id="about">  ABOUT ME</h2>
  <h3>I am a Front End Developer/Web Designer based in Mexico City, Mexico. I am also a college student, public speaker, avid reader. I enjoy learning languages, dancing, traveling and meeting new people. <br><br> </h3>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary btn-lg contact-btn center-block" data-toggle="modal" data-target="#myModal" id="contact-btn">
    Contact me <span class="glyphicon glyphicon-envelope"></span>
  </button>
<br><br>




</div>
</div> <!--ENDS 5th row -->




     <?php get_footer(); ?>
