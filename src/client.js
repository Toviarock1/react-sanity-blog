import client from '@sanity/client';

export default client({
     projectId: "3iqf8rn2",
     dataset: "production",
     useCdn: true,
     apiVersion: "2021-11-02"
});