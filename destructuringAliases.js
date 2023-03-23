// destructuring aliases
// with the help of this we can rename or create a nickname of the destructed variables of an object

const languageInfo = {
	name: "JavaScript",
	founder: "Brindan Eich",
	founded: 1995,
};

// const { name, founder } = languageInfo;
// we can use object destructuring to destructor object key-value
// now, we may have other variables same as the object keys name in the application
// to solve this issue, we can use destructuring aliases to add nickname of that same object keyName
// and then use these nickName to access the values

const { name: languageName, founder: founderName } = languageInfo;

console.log(languageName, founderName);
