export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60d93a2d004d54d5bfb7c122',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qtcseqi6',
                  apiId: 'b5a6de81-bbbc-47af-a235-d2e66250370c'
                },
                {
                  buildHookId: '60d93a2e322868bac2d17eb0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6fdypehk',
                  apiId: '9d2efb7e-3ba9-4d05-9062-e70ecfa8a2d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/inspirescout/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6fdypehk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
