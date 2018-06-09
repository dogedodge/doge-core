import { Group } from '../../src/utils/Group';

function init(children: any[] = []) {
    let grp = new Group(children);
    return {
        children: children,
        grp: grp
    }
}

describe('Group', ()=>{
    it('can add child', ()=>{
        let test = init();
        expect(test.children).toEqual([]);
        test.grp.add(1);
        expect(test.children).toEqual([1]);
    })
})
