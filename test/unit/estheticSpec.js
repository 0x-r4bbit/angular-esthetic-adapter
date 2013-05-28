describe('pascalprecht.esthetic', function () {

  var $compile, $rootScope, element;

  var toCompile = [
    '<select ng-model="selected" esthetic>',
      '<option value="foo">foo</option>',
      '<option value="bar">bar</option>',
    '</select>'
  ].join('');

  var expectedMarkUp = [
    '<div class="esthetic-select">',
      '<button class="esthetic-trigger">',
        '<span>An Option</span>',
      '</button>',
      '<div class="esthetic-list">'
        '<ul hidden="hidden">'
          '<li class="esthetic-item esthetic-item-selected">',
            '<button value="A">An Option</button>',
          '</li>',
          '<li class="esthetic-item">',
            '<button value="B">Another Option</button>',
          '</li>',
        '</ul>',
      '</div>',
      '<input type="hidden" class="esthetic-input" name="select" value="A">',
    '</div>'
  ].join('');

  beforeEach(module('pascalprecht.esthetic'));

  beforEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('esthetic directive', function () {

    it('should generate the right markup', function () {
      $rootScope.selected = 'foo';
      element = $compile(toCompile);
      $rootScope.digest();

      expect(element.hasClass('esthetic-select'));
      expect(element.html()).toEqual(expectedMarkUp);
    });
  });
});
