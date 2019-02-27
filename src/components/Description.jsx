import React from 'react';
import { Typography } from '@material-ui/core';

const Description = () => (
  <>
    <Typography variant="subtitle2">
      This page shows my skills. Based on the <a href="https://www.thoughtworks.com/radar">pioneering
      work of ThoughtWorks</a>, <a href="https://github.com/zalando/tech-radar">Zalando&#39;s project</a> and <a href="https://yaneek.github.io/tech-radar/">https://yaneek.github.io/tech-radar/</a>.
    </Typography>
    
    <table>
        <tr>
            <td>
                <Typography variant="body2">
                <strong>EXPERT</strong> &mdash; Fully capable and experienced, able to teach others. 
                </Typography>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>
                 <Typography variant="body2">
                  <strong>SKILLED</strong> &mdash; Capable need a little help from Google. (Still Learning)
                  </Typography>
            </td>
        </tr>
        <tr>
            <td>
                <Typography variant="body2">
                <strong>BASIC</strong> &mdash; Limited knowledge, need allot of help from Google.
                </Typography>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>
                <Typography variant="body2">
                <strong>NONE</strong> &mdash; Very little to no experience, but would like to learn.
                </Typography>
            </td>
        </tr>
    </table>
    <Typography align="center">
      &copy; 2019 Melissa Palmer
    </Typography>
    
    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
  </>
)

export default Description;
