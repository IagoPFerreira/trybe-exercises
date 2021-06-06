const fetching = require('./ex06');

describe('Testando a requisição', () => {
  fetching.fetchDog = jest.fn();
  afterEach(fetching.fetchDog.mockReset);

  it('Testando requisição caso resolved', () => {
    fetching.fetchDog.mockResolvedValue('request sucess');

    expect(fetching.fetchDog()).resolves.toBe('request sucess');
    expect(fetching.fetchDog).toHaveBeenCalled();
    expect(fetching.fetchDog).toHaveBeenCalledTimes(1);
  })

  it('Testando requisição caso rejected',() => {
    fetching.fetchDog.mockRejectedValue('request failed');

    expect(fetching.fetchDog()).rejects.toBe('request failed');
    expect(fetching.fetchDog).toHaveBeenCalled();
    expect(fetching.fetchDog).toHaveBeenCalledTimes(1);
  });
});