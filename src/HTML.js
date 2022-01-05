import React from 'react';
import MetaTags from 'react-meta-tags';

function HTML() {
          return(
                    <div>
                              <MetaTags>
                                        <title>Mark Strain</title>
                                        <meta property="og:type" content="Website"/>
                                        <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/51802134606_3651c8902b_n.jpg"/>
                                        <meta name="description" property="og:description" content="profile pic"/>
                              </MetaTags>
                    </div>
          )
}

export default HTML;