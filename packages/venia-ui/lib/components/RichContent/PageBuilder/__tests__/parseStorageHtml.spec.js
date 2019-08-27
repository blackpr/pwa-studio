import parseStorageHtml from '../parseStorageHtml';

const testMasterFormat =
    '<div data-content-type="row" data-appearance="contained" data-element="main"><div class="test-class" data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-element="inner" style="justify-content: center; display: flex; flex-direction: column; background-color: rgb(17, 85, 0); background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; text-align: center; border-style: solid; border-color: rgb(255, 0, 0); border-width: 10px; border-radius: 5px; min-height: 100px; margin: 5px; padding: 15px;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Test Heading</h2></div></div>';

test('has root-container as root element', () => {
    const data = parseStorageHtml(testMasterFormat);
    expect(data.contentType).toEqual('root-container');
});

test('finds nested elements', () => {
    const data = parseStorageHtml(testMasterFormat);
    expect(data.children[0].contentType).toEqual('row');
    expect(data.children[0].children[0].contentType).toEqual('heading');
});
