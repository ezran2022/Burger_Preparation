# Burger Preparation

## This is how our system started looking

This is the possibility we give to you of preparing your own burger with your favorite ingredient

![image](https://user-images.githubusercontent.com/103323625/180836323-ff83aefa-cbb8-4cc2-b5b3-e314b805b5e3.png)

This what we said before now you can add ingredients you want and also remove ingredients if you find that amount of burger is high because here the more ingredient 
you put in bread the more amount of burger increase

![image](https://user-images.githubusercontent.com/103323625/180836955-19aefad9-f8d0-41ca-9e73-1ae7f54d47fa.png)

After ordering your Burger we give you a report of your preparation

![image](https://user-images.githubusercontent.com/103323625/180837881-3e9518ac-7284-4c3c-9539-865ceebbcbda.png)

In the report we give you there is a possibility of letting you cancelling the preparation or continue doing it

![image](https://user-images.githubusercontent.com/103323625/180929518-29392d6d-0a6d-4721-8949-3da2526abba2.png)

If you choose to continue we give a short message of showing it

![image](https://user-images.githubusercontent.com/103323625/181176330-17e9d217-522a-4d42-aee0-315c175ef61e.png)

this is our updated system with logo and toolbar

![image](https://user-images.githubusercontent.com/103323625/181483832-1753938f-8312-4752-b739-137704887099.png)
 
 And here we give you a possibiity of using this system on mobile devices
 
 ![image](https://user-images.githubusercontent.com/103323625/181484166-a4de4d99-c19c-47ca-9a8f-edd7912f44b9.png)
 
 this is how the report summary on mobile device

![image](https://user-images.githubusercontent.com/103323625/181484409-42ed1ef6-982e-4bca-9cab-12f125d61a3e.png)
 
 this is the placement of our toobar

![image](https://user-images.githubusercontent.com/103323625/181484682-d8b1a233-1db7-429b-9c17-89a9ebaa8383.png)


## This is Burger Preparation Systemn









this is the link of Burger Preparation system

https://chipper-centaur-50e430.netlify.app/

``` javascript
import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
class App extends Component {
  render() {
  return (
    <div >
       <Layout>
        <BurgerBuilder/>
       </Layout>
    </div>
  );
  }
}

export default App;


```
