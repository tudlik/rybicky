import { useState, useRef, useEffect } from "react";
import fishes from "../fishData";
import {
  PageContainer,
  FishList,
  FishItem,
  Buttons,
  TabButton,
  Button,
  InputForm,
  TextInput,
  Submit,
  AquariumForm,
  AquariumInput,
  AquariumSubmit,
} from "./FishStyle";

const Fish = () => {
  const fishesCount = useRef(fishes.length);
  const [activeTab, setActiveTab] = useState("fishes");
  const [listOfFishes, setListOfFishes] = useState(fishes);
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [requirement, setRequirment] = useState(0);
  const [valid, setValid] = useState(false);
  const [fishRequirments, setFishRequirments] = useState(0);
  const [validAquariumSize, setValidAquariumSize] = useState(false);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [aquariumSize, setAquariumSize] = useState({
    a: 5,
    b: 5,
    c: 2,
  });

  const deleteHandler = (itemToDelete) => {
    const newListOfFishes = listOfFishes.filter(
      (fish) => fish.id !== itemToDelete
    );
    setListOfFishes(newListOfFishes);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    //console.log("handleChange funguje: " + inputName + " : " + inputValue);

    switch (inputName) {
      case "name": {
        setName(inputValue);
        break;
      }
      case "size": {
        setSize(inputValue);
        setRequirment(inputValue === "small" ? parseInt(10) : parseInt(20));

        break;
      }

      case "a": {
        setA(parseInt(inputValue));
        break;
      }
      case "b": {
        setB(parseInt(inputValue));
        break;
      }
      case "c": {
        setC(parseInt(inputValue));
        break;
      }

      default:
        alert("Došlo k nějaké divné chybě");
        break;
    }
  };

  useEffect(() => {
    const updateFishRequirments = listOfFishes
      .map((fish) => fish.requirement)
      .reduce((total, requirement) => total + requirement, 0);
    setFishRequirments(updateFishRequirments);
  }, []);

  useEffect(() => {
    const updateFishRequirments = listOfFishes
      .map((fish) => fish.requirement)
      .reduce((total, requirement) => total + requirement, 0);
    setFishRequirments(updateFishRequirments);
  }, [listOfFishes]);

  useEffect(() => {
    if (name.trim().length > 0 && size !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [name, size]);

  useEffect(() => {
    if (a !== 0 && b !== "" && c !== "" && a * b * c >= fishRequirments) {
      setValidAquariumSize(true);
    } else {
      setValidAquariumSize(false);
    }
  }, [a, b, c, fishRequirments]);

  const handleAddFish = (e) => {
    console.log("tlačítko funguje");
    e.preventDefault(); // zabrání kompletnímu refreshi stránky

    fishesCount.current++; // řešeno pomocí ref
    const updateFish = [
      ...listOfFishes,
      {
        id: fishesCount.current,
        name: name,
        size: size,
        requirement: requirement,
      },
    ];
    setListOfFishes(updateFish);

    setName("");
  };

  const aqSubmit = () => {
    console.log("akvárium půjde nastavit");
    const updateAq = { a, b, c };
    setAquariumSize(updateAq);
    setA("");
    setB("");
    setC("");
  };

  return (
    <PageContainer>
      <Buttons>
        <TabButton
          name="fishes"
          data-active={activeTab}
          onClick={() => setActiveTab("fishes")}
        >
          Rybičky
        </TabButton>
        <TabButton
          name="aquarium"
          data-active={activeTab}
          onClick={() => setActiveTab("aquarium")}
        >
          Akvárium
        </TabButton>
      </Buttons>
      {activeTab === "fishes" && (
        <>
          <FishList name="fishes">
            {listOfFishes.map((fish) => {
              return (
                <FishItem key={fish.id}>
                  {fish.id}&nbsp;: &nbsp;
                  {fish.name}&nbsp;/ &nbsp;
                  {fish.size === "big" ? "velká" : "malá"}
                  <Button onClick={() => deleteHandler(fish.id)}>X</Button>
                </FishItem>
              );
            })}
          </FishList>
          <InputForm>
            <TextInput
              type="text"
              name="name"
              value={name}
              placeholder="Jméno rybičky"
              onChange={handleChange}
            />

            <input
              type="radio"
              id="sizeSmall"
              name="size"
              value="small"
              onChange={handleChange}
            />
            <label htmlFor="sizeSmall"> Malá</label>
            <input
              type="radio"
              id="sizeBig"
              name="size"
              value="big"
              onChange={handleChange}
            />
            <label htmlFor="sizeBig"> Velká</label>

            <Submit
              type="submit"
              value="Přidat"
              disabled={valid === false}
              onClick={handleAddFish}
            />
          </InputForm>
        </>
      )}
      {activeTab === "aquarium" && (
        <>
          <h2>Aktální rozměry akvária</h2>
          <p>Výška: {aquariumSize.a} dm</p>
          <p>Šířka: {aquariumSize.b} dm</p>
          <p>Hloubka: {aquariumSize.c} dm</p>
          <p>
            Celký objem: {aquariumSize.a * aquariumSize.b * aquariumSize.c}l
          </p>
          <p>Požadovaný objem akvária: {fishRequirments} l</p>
          <AquariumForm>
            <AquariumInput
              type="number"
              name="a"
              placeholder="Zadej výšku v dm"
              min="0"
              value={a}
              onChange={handleChange}
            />
            <AquariumInput
              type="number"
              name="b"
              placeholder="Zadej šířku v dm"
              min="0"
              value={b}
              onChange={handleChange}
            />
            <AquariumInput
              type="number"
              name="c"
              placeholder="Zadej hloubku v dm"
              min="0"
              value={c}
              onChange={handleChange}
            />
            <AquariumSubmit
              onClick={aqSubmit}
              disabled={validAquariumSize === false}
            >
              Změnit rozměry akvária
            </AquariumSubmit>
          </AquariumForm>
        </>
      )}
    </PageContainer>
  );
};

export default Fish;
