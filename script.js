<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hiking</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Just Around the Corner Hiking Club</h1>

    <!-- Image added below the title -->
    <div class="image-container">
      <img src="assets/compass_mtn_clip.webp" alt="Compass Mountain Vector">
    </div>

    <div id="NextHike">
      <h2>Next Hike:</h2>
      <div id="WeirCanyon">
        <div id="InfoPanel">
          <h3>Date: Saturday, October 26, 2024</h3>
          <p>
            Location: Weir Canyon <br>
            Info: <a href="https://hikingguy.com/hiking-trails/hiking-orange-county/hike-weir-canyon-trail/">Hiking Guy Review</a><br>
            Time at Trailhead: 07:00AM <br>
            Parking: 6984 E Overlook Terrace, Anaheim, CA 92807, Santiago Oaks Regional Park <br>
            Distance: 2.8 Miles<br>
            Route Type: Loop
          </p>
        </div> <!-- InfoPanel -->
        <div id="RouteWeatherPanel">
          <!-- Beginner (Easy) -->
          <div class="hike-level">
            <div class="circle"></div> <!-- Green Circle for Easy -->
            <div class="responsive-iframe">
              <iframe class="hike-iframe" id='mapmyfitness_route' 
                      src='https://www.mapmyrun.com/routes/view/embedded/6292925020?width=600&height=110&link=true&line_color=E61900DC&rgbhex=DC0019&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&show_marker_every=1&last_updated=2024-10-20T06:37:55+00:00' 
                      frameborder='0'>
              </iframe>
            </div> <!-- Closing responsive-iframe for Beginner -->
          </div> <!-- Closing hike-level for Beginner -->
          
          <!-- Intermediate -->
          <div class="hike-level">
            <div class="blue-square"></div> <!-- Blue Square for Intermediate -->
            <div class="responsive-iframe">
              <iframe class="hike-iframe" id='mapmyfitness_route' 
                      src='https://www.mapmyrun.com/routes/view/embedded/6293779627?width=600&height=110&link=true&line_color=E61900DC&rgbhex=DC0019&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&show_marker_every=1&last_updated=2024-10-20T18:03:54+00:00' 
                      frameborder='0'>
              </iframe>
            </div> <!-- Closing responsive-iframe for Intermediate -->
          </div> <!-- Closing hike-level for Intermediate -->
          
          <!-- Expert -->
          <div class="hike-level">
            <div class="black-diamond"></div> <!-- Black Diamond for Expert -->
            <div class="responsive-iframe">
              <iframe class="hike-iframe" id='mapmyfitness_route' 
                      src='https://www.mapmyrun.com/routes/view/embedded/6293787922?width=600&height=110&link=true&line_color=E61900DC&rgbhex=DC0019&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&show_marker_every=1&last_updated=2024-10-20T18:12:13+00:00' 
                      frameborder='0'>
              </iframe>
            </div> <!-- Closing responsive-iframe for Expert -->
          </div> <!-- Closing hike-level for Expert -->
          
          <div id="WeatherWidget">
            <a class="weatherwidget-io" href="https://forecast7.com/en/33d84n117d91/anaheim/?unit=us" data-label_1="ANAHEIM" data-label_2="WEATHER" data-icons="Climacons Animated" data-theme="pure" >
              ANAHEIM WEATHER
            </a>
            <script>
              !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
            </script>
          </div> <!-- WeatherWidget -->
        </div> <!-- RouteWeatherPanel -->
      </div> <!-- WeirCanyon -->
    </div> <!-- NextHike -->
    <br>
    <br>    

    <!-- Future Hikes Section -->
    <div id="FutureHikes">
      <h2>Future Hikes:</h2>
      <div id="DeukmejianLoop">
        <button class="collapsible">2024-Nov-02: Deukmejian</button>
        <div class="content">
        <p>
          <h3>Date: Saturday, November 2, 2024</h3>
            Location:  <a href="https://maps.app.goo.gl/qSavW1QefkEXxUAZ6">Deukmejian State Park, Glendale, CA</a><br>
            Time at Trailhead: 08:00AM <br>
            Parking: <a href="https://maps.app.goo.gl/jxnsgpuEYZ2QdGwz6">Deukmejian State Park</a><br>
            Distance: 2.8 Miles<br>
            Route Type: Loop - <a href="https://www.mapmyrun.com/routes/view/6292901614">Optional +4mi</a>
        </p>
        <iframe id='mapmyfitness_route' src='https://www.mapmyrun.com/routes/view/embedded/6292902769?width=600&height=376&elevation=true&info=true&line_color=E61900DC&rgbhex=DC0019&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&show_marker_every=1&last_updated=2024-10-20T05:30:24+00:00' 
          height='679px' 
          width='100%' 
          frameborder='0' >
        </iframe>
        <div id="WeatherWidget">
          <a class="weatherwidget-io" href="https://forecast7.com/en/34d14n118d26/glendale/?unit=us" data-label_1="GLENDALE" data-label_2="WEATHER" data-icons="Climacons Animated" data-theme="pure" >
            GLENDALE WEATHER
          </a>
          <script>
            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
          </script>
        </div> <!-- WeatherWidget -->
        </div> <!-- content -->
      </div> <!-- DeukmejianLoop -->
      
      <!-- Echo Mountain Hike -->
      <div id="EchoMtnLoop">
        <button class="collapsible">2024-Nov-22 (Night): Echo Mountain</button>
        <div class="content">
          <p>
            <h3>Date: Friday, November 22, 2024</h3>
            Location: <a href="https://maps.app.goo.gl/MKkJGizo9MwuxVTw8" target="_blank" rel="noopener noreferrer">Cobb Estate Trailhead Echo Mt</a><br>
            Time at Trailhead: 05:00PM <br>
            Parking: Lake and E Loma Alta Dr, Pasadena<br>
            Distance: 5.5 Miles<br>
            Route Type: Out and back
          </p>

          <div id="echo-footer">
            <iframe id="mapmyfitness_route" 
                    src="https://www.mapmyrun.com/routes/view/embedded/6286213267?width=600&height=376&elevation=true&info=true&line_color=E61900DC&rgbhex=DC0019&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&show_marker_every=1&last_updated=2024-10-15T06:52:36+00:00'
                    height="679px" 
                    width="100%" 
                    frameborder="0">
            </iframe>
            <a class="weatherwidget-io" href="https://forecast7.com/en/34d15n118d14/pasadena/?unit=us" data-label_1="PASADENA" data-label_2="WEATHER" data-icons="Climacons Animated" data-theme="pure" >
              PASADENA WEATHER
            </a>
            <script>
              !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
            </script>
            <a rel="noopener noreferrer" target="_blank" href="https://www.mapmyrun.com/routes/view/6286213267">
              <p>View Route Details</p>
            </a>
          </div> <!-- echo-footer -->
        </div> <!-- content -->
      </div> <!-- EchoMtnLoop -->
    </div> <!-- FutureHikes -->
    
    <br><br>

    <!-- Past Hikes Section -->
    <div id="PastHikes">
      <h2>Past Hikes:</h2>
      <div id="EchoMtnLoop">
        <button class="collapsible">Oct 19, 2024: Echo Mountain</button>
        <div class="content">
          <p>
            <h3>Date: Saturday, October 19, 2024</h3>
            Location: <a href="https://maps.app.goo.gl/MKkJGizo9MwuxVTw8" target="_blank" rel="noopener noreferrer">Cobb Estate Trailhead Echo Mt</a><br>
            Time at Trailhead: 06:45AM <br>
            Parking: Lake and E Loma Alta Dr, Pasadena<br>
            Distance: 5.5 Miles<br>
            Route Type: Out and back
          </p>

          <div id="echo-footer">
            <iframe id="mapmyfitness_route" 
                    src="https://www.mapmyrun.com/routes/view/embedded/6286213267?width=600&height=376&elevation=true&info=true&line_color=E61900DC&rgbhex=DC0019&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&show_marker_every=1&last_updated=2024-10-15T06:52:36+00:00'
                    height="679px" 
                    width="100%" 
                    frameborder="0">
            </iframe>
            <a class="weatherwidget-io" href="https://forecast7.com/en/34d15n118d14/pasadena/?unit=us" data-label_1="PASADENA" data-label_2="WEATHER" data-icons="Climacons Animated" data-theme="pure" >
              PASADENA WEATHER
            </a>
            <script>
              !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
            </script>
            <a rel="noopener noreferrer" target="_blank" href="https://www.mapmyrun.com/routes/view/6286213267">
              <p>View Route Details</p>
            </a>
          </div> <!-- echo-footer -->
        </div> <!-- content -->
      </div> <!-- EchoMtnLoop -->
    </div> <!-- PastHikes -->
  </div> <!-- Container Div -->
  
  <script>
    // JavaScript to make the collapsible work
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
  </script>
</body>
</html>
