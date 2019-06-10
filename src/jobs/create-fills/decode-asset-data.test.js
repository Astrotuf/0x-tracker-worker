const decodeAssetData = require('./decode-asset-data');

describe('decodeAssetData', () => {
  it('should return null for invalid asset data', () => {
    const encoded = 'carrot for a nose';
    const decoded = decodeAssetData(encoded);

    expect(decoded).toBeNull();
  });

  it('should return null for unrecognised asset data', () => {
    const encoded =
      '0x94cfcdd7000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000116f350ccd4a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000024f47261b00000000000000000000000001454afb8bb114186761521c3625751f9b8ce7fd6000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000949a8c5bae3fa46e218391e26468648b068a70de00000000000000000000000000000000000000000000000000000000';
    const decoded = decodeAssetData(encoded);

    expect(decoded).toBeNull();
  });

  it('should decode ERC20 asset data', () => {
    const encoded =
      '0xf47261b000000000000000000000000053b04999c1ff2d77fcdde98935bb936a67209e4c';
    const decoded = decodeAssetData(encoded);

    expect(decoded).toEqual({
      assetProxyId: '0xf47261b0',
      tokenAddress: '0x53b04999c1ff2d77fcdde98935bb936a67209e4c',
    });
  });

  it('should decode ERC721 asset data', () => {
    const encoded =
      '0x0257179200000000000000000000000006012c8cf97bead5deae237070f9587f8e7a266d00000000000000000000000000000000000000000000000000000000000d29fe';
    const decoded = decodeAssetData(encoded);

    expect(decoded).toEqual({
      assetProxyId: '0x02571792',
      tokenAddress: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      tokenId: 862718,
    });
  });
});