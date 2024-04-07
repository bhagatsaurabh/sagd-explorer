# sagd

#### Scripts for browsing Google Cloud Service Account default storage

<br/>

## Installation

#### NPM

```bash
npm i sagd
```

<br/>

## Example Usage

```js
import { auth } from "sagd";
import { listAll } from 'sagd/funcs';

const storage = auth();

const files = await listAll(storage);
```

> Authentication uses SAGD_KEY environment variable which should point to your service account key.