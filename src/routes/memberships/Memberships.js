import React from 'react';
import { Input } from 'semantic-ui-react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const membershipStep = atom({
    key: 'membershipStep',
    default: 0
});

function Memberships() {
    return (
        <>
            <h1>Memberships</h1>
            <Input action="" placeholder="Location..." />
        </>
    );
};

export default Memberships;