import React from 'react';
import { Button, Popup } from 'semantic-ui-react';

const listSNS = [
    "facebook",
    "twitter",
    "google plus",
    "vk",
    "linkedin",
    "instagram",
    "youtube",
];

const ButtonCircularSNS = () => {
    return (
        <div>
            { listSNS.map((v, i) => (
                <Popup
                    key={ v }
                    trigger={ <Button circular key={ v } color={ v } icon={ v } /> }
                    content="Sorry. This function is not yet supported."
                />
            )) }
        </div>
    );
};

export default ButtonCircularSNS;
