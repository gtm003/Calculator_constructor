import { formatPrice, formatDate } from '../formatData';

describe('formatDate', () => {
  it('should format the date into dd.mm.yyyy', () => {
    expect(formatDate('2021-10-14T01:12:13.317Z')).toEqual('14.10.2021');
    expect(formatDate('2021-01-05T01:12:13.317Z')).toEqual('05.01.2021');
  });
});

describe('formatPrice', () => {
  it('format price should be "* *** $"', () => {
    expect(formatPrice(3999.0)).toEqual('3\u00A0999\u00A0$');
    expect(formatPrice(156.25)).toEqual('156,25\u00A0$');
    expect(formatPrice(23.5)).toEqual('23,50\u00A0$');
  });
});
