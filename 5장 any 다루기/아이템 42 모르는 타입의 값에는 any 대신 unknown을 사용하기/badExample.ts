function parseYaml(yamlString: string): any {
}

interface Book {
  name: string;
  author: string;
}

const book: Book = parseYaml(`
  name: Wuthering Heights
  author: Emily Bronte
`);

alert(book.title);
