import { Tel } from '../src/Tel';  // Adjust the import based on the actual file structure

describe('Tel.parse', () => {
  it('should parse simple Dutch numbers correctly', async () => {
    expect(Tel.parse('een')).toBe(1);
    expect(Tel.parse('twee')).toBe(2);
    expect(Tel.parse('drie')).toBe(3);
  });

  it('should parse complex Dutch numbers correctly', async () => {
    expect(Tel.parse('elf')).toBe(11);
    expect(Tel.parse('twintig')).toBe(20);
    expect(Tel.parse('honderd en drie')).toBe(103);
  });

  it('should throw an error for invalid input', async () => {
    expect(() => Tel.parse('invalid input')).toThrow();
  });
});

