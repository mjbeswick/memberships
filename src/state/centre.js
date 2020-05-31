import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const centre = atom({
    key: 'centre',
    default: {}
});

