import { Tel } from '../src/Tel';

describe('Tel.parse', () => {
    it('should parse simple Dutch numbers correctly', () => {
        expect(Tel.parse('een')).toBe(1);
        expect(Tel.parse('twee')).toBe(2);
        expect(Tel.parse('drie')).toBe(3);
    });

    it('should parse teen Dutch numbers correctly', () => {
        expect(Tel.parse('tien')).toBe(10);
        expect(Tel.parse('elf')).toBe(11);
        expect(Tel.parse('twaalf')).toBe(12);
    });

    it('should parse tens Dutch numbers correctly', () => {
        expect(Tel.parse('twintig')).toBe(20);
        expect(Tel.parse('dertig')).toBe(30);
        expect(Tel.parse('veertig')).toBe(40);
    });

    it('should parse compound Dutch numbers correctly', () => {
        expect(Tel.parse('twintig een')).toBe(21);
        expect(Tel.parse('dertig twee')).toBe(32);
        expect(Tel.parse('vijftig drie')).toBe(53);
    });

    it('should parse hundreds correctly', () => {
        expect(Tel.parse('honderd')).toBe(100);
        expect(Tel.parse('honderd en een')).toBe(101);
        expect(Tel.parse('tweehonderd')).toBe(200);
    });

    it('should parse thousands correctly', () => {
        expect(Tel.parse('duizend')).toBe(1000);
        expect(Tel.parse('duizend een')).toBe(1001);
        expect(Tel.parse('elfhonderdeneen')).toBe(1101);
    });

    it('should parse millions correctly', () => {
        expect(Tel.parse('miljoen')).toBe(1000000);
        expect(Tel.parse('zeventien miljoen drieënvijftigduizend negenhonderdtachtig')).toBe(17053980);
        expect(Tel.parse('twee miljoen')).toBe(2000000);
    });

    it('should parse billions correctly', () => {
        expect(Tel.parse('miljard')).toBe(1000000000);
        expect(Tel.parse('miljard een')).toBe(1000000001);
        expect(Tel.parse('twee miljard')).toBe(2000000000);
    });

    it('should parse complex numbers correctly', () => {
        expect(Tel.parse('drieduizend en vijfhonderdzevenenzeventig')).toBe(3577);
        expect(Tel.parse('vijfendertighonderdenzevenenzeventig')).toBe(3577);
    });

    it('should throw an error for invalid input', () => {
        expect(() => Tel.parse('invalid')).toThrowError('Error parsing input: Invalid number context');
    });
});
