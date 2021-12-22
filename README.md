## React Native UI component

## React native customizable View component


### Example
```js 
 <Block flex backgroundColor="#03A9F4" center>

      <Block row flex padding={5} margin={5} backgroundColor="#80DEEA">
        <Block center top flex backgroundColor="#78909C">
          <Text>A</Text>
        </Block>

        <Block center flex backgroundColor="#039BE5">
          <Text>B</Text>
        </Block>
      </Block>

      <Block  flex center >
        <Block center width={150} height={80}  padding={5}   touchable backgroundColor="orange">
        <Text>Clickable</Text>
        </Block>
        
      </Block>

    </Block>