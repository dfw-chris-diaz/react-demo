import React from 'react';
import { Link } from 'react-router';

export default function Step1() {
    return (
      <div>
        <h1 id="setp3_hdr"><span className="brightRedText">Step 1</span></h1>
        <div>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <Link to="/Tab1">"Tab 1"</Link></div>
      </div>
    );
}