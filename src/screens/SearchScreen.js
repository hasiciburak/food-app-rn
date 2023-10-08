import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({ navigation }) => {
  // Hooks
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f95419" />
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
          navigation={navigation}
        />
        <ResultList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
        <ResultList
          results={filterResultsByPrice("$$$$")}
          title="Ultimate Luxury"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
