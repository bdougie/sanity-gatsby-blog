export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8776b84e70d7267e176ddf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o5u8so92',
                  apiId: '24257c6a-201b-4848-bba0-cdb992403f60'
                },
                {
                  buildHookId: '5d8776b8e884222f9f8b8078',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ouqy4yov',
                  apiId: '0662de6d-67f9-4e27-9c4f-71e6c3d98302'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bdougie/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ouqy4yov.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
