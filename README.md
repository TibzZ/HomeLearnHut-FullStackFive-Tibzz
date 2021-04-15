# Packages used

`npm install --save react-s3`  
`npm install --save react-modal-hook`  

# data

hard-coded data stored in libs/data. Classrooms in libs/data/classrooms can be prepopulated with dummy data

# homework object

Example:

```javascript
  {
    name: `English - Conjunctions`,
    image: `${host}eng.PNG`,
    dateSet: `September 14th, 2020`,
    dateDue: `Wednesday`,
    comment:
      `Complete each sentence using the correct conjunction. Make sure to read the sentences carefully as you will be using them in class later this week.`,
    children: [...children],
  }
  ```

  # child object ( children / classroom )

  ```javascript
  {
    name: "Amelia",
    avatar: `${host}1.png`,
    individualHomeworkImage: null,
    annotation: null,
    comment: null
}
```

# Represented in SQL ( for a backend)

```sql
CREATE TABLE homework (
id serial NOT NULL PRIMARY KEY,
name TEXT NOT NULL,
image TEXT NOT NULL,
DateOfEntry TIMESTAMP NOT NULL DEFAULT NOW(),
dateDue TEXT,
comment TEXT,
children json NOT NULL
);

```



