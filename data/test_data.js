export const json = {
  title: "KT 정신건강 테스트",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "QuestionRadiogroup1",
          title: "당신의 성별은 무엇입니까?",
          tag: "a53c4487-d235-f7d2-a03f-b07d4fd2f37a",
          choices: [
            {
              value: "Item 1",
              text: "여자"
            },
            {
              value: "Item 2",
              text: "남자"
            }
          ]
        },
        {
          type: "radiogroup",
          name: "QuestionRadiogroup3",
          title: "당신의 직업은 무엇입니까?",
          tag: "bd9db1be-fa38-6d7e-0bb8-93a1fd48ed79",
          choices: [
            {
              value: "Item 1",
              text: "경찰"
            },
            {
              value: "Item 2",
              text: "소방관"
            },
            {
              value: "Item 3",
              text: "공무원"
            }
          ]
        },
        {
          type: "radiogroup",
          name: "QuestionRadiogroup5",
          title: "당신의 연령대는 어디에 해당하십니까?",
          tag: "bc9269d0-3068-edef-b264-cf4e48cbdc72",
          choices: [
            {
              value: "Item 1",
              text: "20대"
            },
            {
              value: "Item 2",
              text: "30대"
            },
            {
              value: "Item 3",
              text: "40대"
            },
            {
              value: "Item 4",
              text: "50대"
            },
            {
              type: "radiogroup",
              name: "QuestionRadiogroup7",
              title: "평소 우울감은 어느정도입니까?",
              choices: [
                {
                  value: "Item 1",
                  text: "없음"
                },
                {
                  value: "Item 2",
                  text: "보통"
                },
                {
                  value: "Item 3",
                  text: "심함"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
