
## React Native Customizable View Component

### Now You Can Build React-Native UI More Faster And Clean 
### Example
![](https://user-images.githubusercontent.com/33010618/147148021-b09e318b-273b-4ddb-9511-b3235f26a938.png)
```js 
    import { Block } from "react-native-block-component";


   <Block flex backgroundColor="#03A9F4" >

      <Block flex row  padding={5} margin={5} backgroundColor="#80DEEA">
        <Block flex={2} center top  backgroundColor="#78909C">
          <Text>A</Text>
        </Block>

        <Block flex={1} center  backgroundColor="#039BE5">
          <Text>B</Text>
        </Block>
      </Block>

      <Block flex center row space='evenly'>
        <Block
          center
          width={150}
          padding={10}
          touchable
          card
        >
          <Text>Clickable</Text>
        </Block>
        <Block
          center
          width={150}
          padding={10}
          touchable
          backgroundColor="orange"
        >
          <Text>Clickable</Text>
        </Block>
      </Block>

    </Block>
```

#### Props

| Prop                             | Default |  Type  | Description                                                                                                                                                                                                                                     |
| :------------------------------- | :-----: | :----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| row                              |  false  | `bool` | If `true`, Elements display in a horizontal line 
| flex                             |  false  | `bool` -`number`| if true the flex value would be `1`
| space                            |  false  | `between` -`evenly` - `around`| specify how the blocks distributed in the flex `justifyContent`
| top                        |  false  | `bool` | Set to `true` Align elements to the top
| bottom                        |  false  | `bool` | Set to `true` Align elements to the bottom
| right                        |  false  | `bool` | Set to `true` Align elements to the right
| left                        |  false  | `bool` | Set to `true` Align elements to the left
| wrap                        |  false  | `bool` | If true wrap the block elements if exceeded the width
| alignContent                |  false  | `center` | `flex-start` | `flex-end` | If the Block children was wrapped `wrap` you need this props to place the elements `top,bottom,...`
| backgroundColor     |  undefined  | `string` | Set the block backgroundColor
| touchable     |  false  | `bool` | Make the element to be touchable `TouchableOpacity` accepts `onPress`
| safe     |  false  | `bool` | display the Block with `SafeAreaView`
| card     |  false  | `bool` | Add border and borderRadius to the Block
| width     |  undefined  | `number` | Set the block width
| height     |  undefined  | `number` | Set the block height
| padding     |  undefined  | `number`-`[numbers]` | if number add padding to al dimensions of Block if array of numbers would set to [top,right,bottom,left] padding
| margin     |  undefined  | `number`-`[numbers]` | if number add margin to al dimensions of Block if array of numbers would set to [top,right,bottom,left] margin