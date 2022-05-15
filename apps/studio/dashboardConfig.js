export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'ewill025/sanity-angular-website-portf'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '628060b6d5975057ef64f764',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-portf-studio',
                  apiId: '08cd996c-be8b-4748-840a-ed2bc0250525'
                },
                {
                  buildHookId: '628060b67f063c620ec382fd',
                  title: 'Website',
                  name: 'sanity-angular-website-portf',
                  apiId: '167ac80e-9686-4558-8e09-35189c49f830'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ewill025/sanity-angular-website-portf',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-portf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
