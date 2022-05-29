# 3 Building out frontend of our plugin using Strapi Design System.

# Outline

- Introduction
- Buidling the frontend
  - Empty state component
  - Todo modal component
  - Todo count component
  - Todo table component
- What's next?

# Introduction

In the last part, we learned how to scaffold our plugin, learned about plugin file structure, and introduced Strapi Design System components to build our frontend.

We will continue to build the rest of our frontend components before handling the server or back-end functionality in this next post.

The last items that we have remaining are the empty state component, which is when we have no todos yet, the modal to add a todo, the count component to display the numbers of todos, and the table component to display our todos.

Since this is more of a tutorial for how to make plugins vs. React tutorial, I am going to provide the frontend code snippets, but if you have questions, you can always reach out to me.

# Building the frontend

Let's build the four remaining components. We will start with the empty state component.

## The empty state component

This is what will show up when the todo data is empty.

![[emtystatecomponent.png]]

You can find all of these components in [Strapi Design System](https://design-system-git-main-strapijs.vercel.app/?path=/docs/design-system-components-emptystatelayout--base) Storybook. However, for the brevity of the tutorial, I will add the code snippets in the post below.

In your favorite code editor, open your Strapi project that we have been working on, and in our plugin folder let's navigate to `admin/src/pages/HomePage/index.js.`

You should see this code.

```jsx
/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";

import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";

// import PropTypes from 'prop-types';

const HomePage = () => {
  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        <h1>Hello from our Todo Plugin</h1>
      </ContentLayout>
    </>
  );
};

export default memo(HomePage);
```

First, let's add todos into state and import useState in the above import.

Then we can check if we have todos and conditionally render the EmtyStateLayout component or the rest of the items.

```jsx
import React, { memo, useState } from "react";

import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";

// import PropTypes from 'prop-types';

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);

  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0
          ? // add emty state component here
          : // add count and table componennet here
        }
      </ContentLayout>
    </>
  );
};

export default memo(HomePage);
```

Our EmtyStateLayout component relies on a Button component Plus icon component and an Illo component.

We can import the Button and Plus components directly from Strapi Design System, but we have to create the Illo component ourselves. So let's do that first.

Let's create a folder called Illo in the components folder, create an index.js file, and paste the below code.

`admin/src/components/Illo/index.js`

```jsx
// admin/src/components/Illo/index.js

import React from "react";

export const Illo = () => (
  <svg
    width="159"
    height="88"
    viewBox="0 0 159 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M134.933 17.417C137.768 17.417 140.067 19.7153 140.067 22.5503C140.067 25.3854 137.768 27.6837 134.933 27.6837H105.6C108.435 27.6837 110.733 29.9819 110.733 32.817C110.733 35.6521 108.435 37.9503 105.6 37.9503H121.733C124.568 37.9503 126.867 40.2486 126.867 43.0837C126.867 45.9187 124.568 48.217 121.733 48.217H114.272C110.698 48.217 107.8 50.5153 107.8 53.3503C107.8 55.2404 109.267 56.9515 112.2 58.4837C115.035 58.4837 117.333 60.7819 117.333 63.617C117.333 66.4521 115.035 68.7503 112.2 68.7503H51.3333C48.4982 68.7503 46.2 66.4521 46.2 63.617C46.2 60.7819 48.4982 58.4837 51.3333 58.4837H22.7333C19.8982 58.4837 17.6 56.1854 17.6 53.3503C17.6 50.5153 19.8982 48.217 22.7333 48.217H52.0666C54.9017 48.217 57.2 45.9187 57.2 43.0837C57.2 40.2486 54.9017 37.9503 52.0666 37.9503H33.7333C30.8982 37.9503 28.6 35.6521 28.6 32.817C28.6 29.9819 30.8982 27.6837 33.7333 27.6837H63.0666C60.2316 27.6837 57.9333 25.3854 57.9333 22.5503C57.9333 19.7153 60.2316 17.417 63.0666 17.417H134.933ZM134.933 37.9503C137.768 37.9503 140.067 40.2486 140.067 43.0837C140.067 45.9187 137.768 48.217 134.933 48.217C132.098 48.217 129.8 45.9187 129.8 43.0837C129.8 40.2486 132.098 37.9503 134.933 37.9503Z"
      fill="#DBDBFA"
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834ZM55.6176 21.208L58.9814 20.8306Z"
      fill="white"
    />

    <path
      d="M55.6176 21.208L58.9814 20.8306M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834Z"
      stroke="#7E7BF6"
      strokeWidth="2.5"
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M93.9695 19.8144L100.144 64.9025L100.699 69.4258C100.878 70.8831 99.8559 72.2077 98.416 72.3845L59.9585 77.1065C58.5185 77.2833 57.2062 76.2453 57.0272 74.7881L51.0506 26.112C50.9519 25.308 51.5236 24.5762 52.3276 24.4775L57.0851 23.8934"
      fill="#F0F0FF"
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M97.701 7.33301H64.2927C63.7358 7.33301 63.2316 7.55873 62.8667 7.92368C62.5017 8.28862 62.276 8.79279 62.276 9.34967V65.083C62.276 65.6399 62.5017 66.1441 62.8667 66.509C63.2316 66.874 63.7358 67.0997 64.2927 67.0997H107.559C108.116 67.0997 108.62 66.874 108.985 66.509C109.35 66.1441 109.576 65.6399 109.576 65.083V19.202C109.576 18.6669 109.363 18.1537 108.985 17.7755L99.1265 7.92324C98.7484 7.54531 98.2356 7.33301 97.701 7.33301Z"
      fill="white"
      stroke="#7F7CFA"
      strokeWidth="2.5"
    />

    <path
      d="M98.026 8.17871V16.6833C98.026 17.8983 99.011 18.8833 100.226 18.8833H106.044"
      stroke="#807EFA"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M70.1594 56.2838H89.2261M70.1594 18.8838H89.2261H70.1594ZM70.1594 27.6838H101.693H70.1594ZM70.1594 37.2171H101.693H70.1594ZM70.1594 46.7505H101.693H70.1594Z"
      stroke="#817FFA"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
```

Now in our HomePage, let's add our EmtyStateLayout component. You can see the files added in the code below.

`admin/src/pages/HomePage/index.js.`

```jsx
import React, { memo, useState } from "react";

import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";

import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";

// import PropTypes from 'prop-types';

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);

  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          // add count and table componennet here
        )}
      </ContentLayout>
    </>
  );
};

export default memo(HomePage);
```

This is what our plugin page should look like. Before connecting the "Add your first todo" button functionality. Let's first create the modal view in the next section.

![[emtystateview.png]]

## Add todo modal component

We are making progress—a few things left in terms of our UI. Let's keep going.

In the components folder, let's create a folder called TodoModal with an index.js file and paste in the code from below.

`admin/src/components/TodoModal/index.js`

```jsx
import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
} from "@strapi/design-system";

export default function TodoModal({ setShowModal, addTodo }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addTodo({ name: name });
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    // Form validation error

    if (name.length > 40) {
      return "Content is too long";
    }

    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add todo
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="What do you need to do?"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add todo</Button>}
      />
    </ModalLayout>
  );
}
```

As you can see, we rely on Strapi Design System components that allow us to create our UI quickly and easily.

You can find all these components here [Strapi Design System Storybook](https://design-system-git-main-strapijs.vercel.app/?path=/story/design-system-components-accordion--base)

Also, our TodoModal takes in two props, **_addTodo_**, and **_setShowModal_**.

In the code below, we will add our TodoModal component, set the show modal state and todo state, and create a function to save our todos to the local state.

Later, when we create the backend portion of our API, we will save our todos to the database.

`admin/src/pages/HomePage/index.js.`

```jsx
import React, { memo, useState } from "react";
import { nanoid } from "nanoid";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import TodoModal from "../../components/TodoModal";

// import PropTypes from 'prop-types';

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function addTodo(data) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);
  }

  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          <h2>You have {todoData.length} count</h2>
        )}
      </ContentLayout>

      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </>
  );
};

export default memo(HomePage);
```

You should now have a working modal. But when the state changes, we still show a boring message. So, in the next section, let's add the next component that will display the count header in a more exciting way.

![[workingmodal.png]]

## Add Todo count component

Let's create our TodoCount component.

In the components folder, let's create a folder called TodoCount with an index.js file and paste in the code from below.

`admin/src/components/TodoCount/index.js`

```jsx
import React from "react";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Typography } from "@strapi/design-system/Typography";

export default function TodoCount({ count }) {
  return (
    <Box background="neutral0" hasRadius={true} shadow="filterShadow">
      <Flex justifyContent="center" padding={8}>
        <Typography variant="alpha">
          You have a total of {count} todos 🚀
        </Typography>
      </Flex>
    </Box>
  );
}
```

Now that we have finished our TodoCount component, we have to add the last peace, which will be the TodoTable component to display our todos.

## Add Todo table component

In the components folder, let's create a folder called TodoTable with an index.js file and paste in the code from below.

`admin/src/components/TodoTable/index.js`

```jsx
Todo;
```

Our table component is complete; you can now see a todo. But we are still not done. And our app will probably break.

![[todotablecomponnent.png]]

We will have to create our plugin's backend for everything to work.

For now, I will add placeholder functions that our table expects as props to render it without any errors.

`placeholder functions`

```jsx
async function toggleTodo(data) {
  alert("Add Toggle Todo in API");
}

async function deleteTodo(data) {
  alert("Add Delete Todo in API");
}

async function editTodo(id, data) {
  alert("Add Edit Todo in API");
}
```

Here is the complete code in our Home Page component.

`admin/src/pages/HomePage/index.js.`

```jsx
import React, { memo, useState } from "react";
import { nanoid } from "nanoid";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";

import TodoModal from "../../components/TodoModal";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";

// import PropTypes from 'prop-types';

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function addTodo(data) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function toggleTodo(data) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data) {
    alert("Add Delete Todo in API");
  }

  async function editTodo(id, data) {
    alert("Add Edit Todo in API");
  }

  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          <>
            <TodoCount count={todoData.length} />

            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        )}
      </ContentLayout>

      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </>
  );
};

export default memo(HomePage);
```

We finished our basic frontend UI; what's next?

# What's next?

We will start building the backend for our plugin in the coming sections. But, first, we will create our content-types, then implement routes, services, and controllers.

We will test our API before tying our Admin (frontend) and Server (backend) portions of our plugin.
